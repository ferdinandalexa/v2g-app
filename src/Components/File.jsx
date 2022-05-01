import { useContext, useEffect, useState } from 'react';
import IconDelete from '../Icons/IconDelete';
import FilesContext from '../Context/FilesContext';
import useTranscoding from '../hooks/useTranscoding';
import changeExtension from '../utilities/changeExtension';

const PROCESS_END = 1;

function File ({ uuid, name, dataURL }) {
  const [gif, setGif] = useState();
  const { files, setFiles } = useContext(FilesContext);
  const [transcodedFile, doTranscode, progress] = useTranscoding();

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
  };

  useEffect(() => {
    if (progress === PROCESS_END) { setGif(URL.createObjectURL(new Blob([transcodedFile.buffer], { type: 'image/gif' }))); }
  }, [transcodedFile]);

  return (
    <div className='flex flex-row items-center justify-between w-full px-6 py-4'>
      <h3 className='inline-block w-full text-base text-neutral-400'>{name}</h3>
      <span className='text-white'>{parseInt(progress * 100)}%</span>
      <div className='flex flex-row items-center justify-end w-full gap-4'>
        <button className='inline-block align-middle transition-colors rounded-full w-9 h-9' onClick={deleteFile}>
          <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
        </button>
        {!gif
          ? <button onClick={() => doTranscode(name, dataURL)} className='w-48 px-4 py-2 text-center transition-colors rounded-md bg-slate-600 hover:bg-slate-700 text-neutral-200'>Convert file</button>
          : <a href={gif} download={`${changeExtension(name, '.gif')}`} className='w-48 px-4 py-2 text-center transition-colors rounded-md bg-slate-600 hover:bg-slate-700 text-neutral-200'>Descargar</a>}
      </div>
    </div>
  );
}

export default File;
