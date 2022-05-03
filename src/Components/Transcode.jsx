import { useContext, useEffect } from 'react';
import useTranscoding from '../hooks/useTranscoding';

import Button from './Button';
import ProgressBar from './ProgressBar';

import FilesContext from '../Context/FilesContext';

const PROCESS_INITIALIZED = 'Pending';
const PROCESS_END = 'Done';

function Transcode ({ uuid, filename, objectURL }) {
  const { files, setFiles } = useContext(FilesContext);
  const [transcodedFile, doTranscode, progress, status] = useTranscoding();

  useEffect(() => {
    if (status === PROCESS_END) {
      const blobGIF = new Blob([transcodedFile.buffer], { type: 'image/gif' });
      const urlBloblGIF = URL.createObjectURL(blobGIF);
      const upadatedFiles = files.map(file => {
        return file.uuid === uuid
          ? Object.assign(file, { gif: urlBloblGIF, isTranscoded: true, isProcessing: false })
          : file;
      });
      setFiles(upadatedFiles);
    }

    if (status !== PROCESS_INITIALIZED && status !== PROCESS_END) {
      const upadatedFiles = files.map(file => {
        return file.uuid === uuid
          ? Object.assign(file, { isProcessing: true })
          : file;
      });
      setFiles(upadatedFiles);
      console.log(files);
    }
  }, [status]);

  const display = {
    Pending: <Button onClick={() => doTranscode(filename, objectURL)}>Convert file</Button>,
    Loading: <Button>Loading...</Button>,
    Transcoding: <ProgressBar done={parseInt(progress * 100)} />
  };

  return display[status];
}

export default Transcode;
