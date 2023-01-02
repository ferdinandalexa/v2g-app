import { useContext } from 'react';

import IconDelete from './Icons/IconDelete';

import { FileItemContext } from './File';
import FilesContext from '../Context/FilesContext';
import TranscodeContext from '../Context/TranscodeContext';

function DeleteFileButton () {
  const { uuid, name, extension } = useContext(FileItemContext);
  const { files, setFiles } = useContext(FilesContext);
  const { setTotalTranscoded } = useContext(TranscodeContext);

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
    setTotalTranscoded(total => total - 1);
  };

  return (
    <button
      onClick={deleteFile}
      title={`Remove ${name}.${extension} file`}
      className='inline-block align-middle transition-colors rounded-full w-9 h-9'
    >
      <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
    </button>

  );
}

export default DeleteFileButton;
