import { useContext, useEffect, useState } from 'react';
import useTranscoding from '../hooks/useTranscoding';

import Button from './Button';
import ProgressBar from './ProgressBar';
import Download from './Download';

import FilesContext from '../Context/FilesContext';

const PROCESS_END = 'Done';

function Transcode ({ uuid, filename, from, objectURL, gif }) {
  const { files, setFiles } = useContext(FilesContext);
  const [hasGif, setHasGif] = useState(false);
  const [transcodedFile, doTranscode, progress, status] = useTranscoding();

  useEffect(() => {
    if (status === PROCESS_END) {
      const blobGIF = new Blob([transcodedFile.buffer], { type: 'image/gif' });
      const urlBloblGIF = URL.createObjectURL(blobGIF);
      const upadatedFiles = files.map(file => {
        return file.uuid === uuid
          ? Object.assign(file, { gif: urlBloblGIF })
          : file;
      });
      setFiles(upadatedFiles);
    }

    if (gif) setHasGif(true);
  }, [status]);

  const display = {
    Pending: <Button onClick={() => doTranscode(uuid, `${filename}.${from}`, objectURL)}>Convert file</Button>,
    Loading: <Button>Loading...</Button>,
    Transcoding: <ProgressBar done={parseInt(progress * 100)} />,
    Done: <Download file={gif} filename={`${filename}.gif`}>Descargar</Download>
  };

  return (
    hasGif
      ? <Download file={gif} filename={`${filename}.gif`}>Descargar</Download>
      : display[status]
  );
}

export default Transcode;
