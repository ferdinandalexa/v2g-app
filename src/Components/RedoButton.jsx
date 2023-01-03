import { useContext } from 'react';

import IconRedo from './Icons/IconRedo';

import { FileItemContext } from './FileItem';
import TranscodeContext from '../Context/TranscodeContext';

function DeleteFileButton () {
  const { uuid, name, extension, dataURL } = useContext(FileItemContext);
  const { doTranscode } = useContext(TranscodeContext);

  return (
    <button
      onClick={() => doTranscode(uuid, `${name}.${extension}`, dataURL)}
      title='Redo transcode'
      className='inline-block align-middle transition-colors rounded-full w-9 h-9'
    >
      <IconRedo className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-indigo-500 hover:bg-neutral-700' />
    </button>

  );
}

export default DeleteFileButton;
