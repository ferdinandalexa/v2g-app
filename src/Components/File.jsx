import { useContext } from 'react';

import Transcode from '../Components/Transcode';
import IconDelete from '../Icons/IconDelete';

import FilesContext from '../Context/FilesContext';

import changeExtension from '../utilities/changeExtension';

function File ({ uuid, name, dataURL, gif, isTranscoded, isProcessing }) {
  const { files, setFiles } = useContext(FilesContext);

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
  };

  return (
    <div className='flex flex-row items-center justify-between w-full px-6 py-4'>
      <h3 className='inline-block w-full text-base text-neutral-400'>{name}</h3>
      <div className='flex flex-row items-center justify-end w-full gap-4'>
        {
          (!isProcessing || !isTranscoded) &&
            <button className='inline-block align-middle transition-colors rounded-full w-9 h-9' onClick={deleteFile}>
              <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
            </button>
        }
        {
          !isTranscoded
            ? <Transcode uuid={uuid} filename={name} objectURL={dataURL} />
            : <a href={gif} download={`${changeExtension(name, '.gif')}`} className='w-48 px-4 py-2 text-center transition-colors rounded-md bg-lime-600 hover:bg-lime-700 text-neutral-100'>Descargar</a>
        }
      </div>
    </div>
  );
}

export default File;
