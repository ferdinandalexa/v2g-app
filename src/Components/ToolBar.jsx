import { useContext } from 'react';
import { Link } from 'wouter';

import ProcessButton from './ProcessButton';
import Download from './Download';

import IconDelete from './Icons/IconDelete';
import IconEye from './Icons/IconEye';

import { FileItemContext } from './File';
import FilesContext from '../Context/FilesContext';
import TranscodeContext from '../Context/TranscodeContext';
import ProcessContext from '../Context/ProcessContext';

function Toolbar () {
  const { uuid, name, extension, gif } = useContext(FileItemContext);
  const { files, setFiles } = useContext(FilesContext);
  const { isProcessing, currentUuid } = useContext(ProcessContext);
  const { setTotalTranscoded, status } = useContext(TranscodeContext);

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
    setTotalTranscoded(total => total - 1);
  };

  return (
    <>
      {((!isProcessing && status !== 'Loading') || uuid !== currentUuid) &&
        <button
          onClick={deleteFile}
          title={`Remove ${name}.${extension} file`}
          className='inline-block align-middle transition-colors rounded-full w-9 h-9'
        >
          <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
        </button>}
      {gif &&
        <>
          <Link to={`/preview/${uuid}`}>
            <a className='inline-block mr-1 align-middle transition-colors rounded-full h-9 w-9'>
              <IconEye className='w-full h-full px-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-yellow-500 hover:bg-neutral-700 ' />
            </a>
          </Link>
          <Download file={gif} filename={`${name}.gif`} type='image/gif'>Download</Download>
        </>}
      {
          uuid === currentUuid
            ? <ProcessButton status={status} />
            : <ProcessButton status='Pending' />
        }
    </>
  );
}

export default Toolbar;
