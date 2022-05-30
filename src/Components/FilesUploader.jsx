import { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuid } from 'uuid';
import IconUpload from './Icons/IconUpload';
import FilesContext from '../Context/FilesContext';

import { splitPath } from '../utilities/changeExtension';

const DnDZOptions = {
  accept: 'video/*'
};

function handleAcceptedFiles (acceptedFiles) {
  const accepted = acceptedFiles.map((droppedFile) => {
    const dataURL = URL.createObjectURL(droppedFile);
    const { name, extension } = splitPath(droppedFile.name);
    const file = {
      uuid: `${uuid()}`,
      name,
      extension,
      dataURL,
      gif: null
    };

    return file;
  });
  return accepted;
}

function FilesUploader () {
  const { files, setFiles } = useContext(FilesContext);

  const onDrop = acceptedFiles => {
    const accepted = handleAcceptedFiles(acceptedFiles);
    setFiles([...files, ...accepted]);
  };

  const { getRootProps, getInputProps } = useDropzone({ ...DnDZOptions, onDrop });
  return (
    <section {...getRootProps()} className='px-4 py-16 transition-colors cursor-default rounded-xl bg-neutral-800 hover:bg-neutral-700'>
      <div className='flex flex-col items-center max-w-xs gap-4 mx-auto'>
        <div className='text-center'>
          <span className='inline-block p-6 rounded-full bg-neutral-700 w-max'>
            <IconUpload width='48px' height='48px' className='fill-neutral-400' />
          </span>
          <p className='text-lg text-neutral-300'>Drag and drop some files here, or</p>
        </div>
        <button className='w-full px-6 py-3 rounded-lg shadow-2xl bg-slate-600 text-neutral-50 shadow-neutral-800'>Click to select files</button>
      </div>
      <input type='file' {...getInputProps()} className='hidden' />
    </section>
  );
}

export default FilesUploader;
