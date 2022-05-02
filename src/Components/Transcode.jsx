import { useContext, useEffect } from 'react';
import useTranscoding from '../hooks/useTranscoding';

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
    Pending: <button onClick={() => doTranscode(filename, objectURL)} className='w-48 px-4 py-2 text-center transition-colors rounded-md bg-slate-600 hover:bg-slate-700 text-neutral-200'>Convert file</button>,
    Loading: <span className='block w-48 px-4 py-2 text-center transition-colors rounded-md bg-slate-600 text-neutral-200'>Loading...</span>,
    Transcoding: <ProgressBar done={parseInt(progress * 100)} />
  };

  return display[status];
}

export default Transcode;
