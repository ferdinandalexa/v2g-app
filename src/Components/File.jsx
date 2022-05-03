import { useContext, useEffect, useState } from 'react';

import Transcode from '../Components/Transcode';
import Download from '../Components/Download';
import IconDelete from './Icons/IconDelete';

import FilesContext from '../Context/FilesContext';

function File ({ uuid, name, dataURL, gif, gifName, isTranscoded, isProcessing }) {
  const [enableDelete, setEnableDelete] = useState(true);
  const { files, setFiles } = useContext(FilesContext);

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
  };

  useEffect(() => {
    if (isTranscoded || isProcessing) setEnableDelete(false);
  }, [isTranscoded, isProcessing]);

  return (
    <div className='flex flex-row flex-wrap items-center justify-between w-full px-6 py-4'>
      <h3 className='inline-block w-full text-base text-neutral-400 sm:w-max'>{!isTranscoded ? name : gifName}</h3>
      <div className='flex flex-row-reverse items-center justify-end flex-grow gap-4 mt-4 sm:justify-end sm:flex-row sm:mt-0 sm:ml-4'>
        {
          enableDelete &&
            <button className='inline-block align-middle transition-colors rounded-full w-9 h-9' onClick={deleteFile}>
              <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
            </button>
        }
        {
          !isTranscoded
            ? <Transcode uuid={uuid} filename={name} objectURL={dataURL} />
            : <Download file={gif} filename={gifName}>Descargar</Download>
        }
      </div>
    </div>
  );
}

export default File;
