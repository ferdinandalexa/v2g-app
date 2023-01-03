import { useContext } from 'react';

import Button from './Button';
import RedoButton from './RedoButton';
import ProgressBar from './ProgressBar';

import { FileItemContext } from './FileItem';
import TranscodeContext from '../Context/TranscodeContext';

function ProcessButton ({ status }) {
  const { uuid, name, extension, dataURL } = useContext(FileItemContext);
  const { doTranscode, stopTranscoding, progress } = useContext(TranscodeContext);

  const display = {
    Pending: <Button onClick={() => doTranscode(uuid, `${name}.${extension}`, dataURL)}>Convert file</Button>,
    Transcoding: (
      <>
        <ProgressBar done={parseInt(progress * 100)} />
        <Button onClick={stopTranscoding}>Stop</Button>
      </>
    ),
    Redo: <RedoButton>Convert file</RedoButton>
  };

  return display[status];
}

export default ProcessButton;
