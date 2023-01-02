import { useContext } from 'react';
import { Link } from 'wouter';

import DeleteFileButton from './DeleteFileButton';
import ProcessButton from './ProcessButton';
import Download from './Download';

import IconEye from './Icons/IconEye';

import { FileItemContext } from './File';
import TranscodeContext from '../Context/TranscodeContext';
import ProcessContext from '../Context/ProcessContext';

function Toolbar () {
  const { uuid, name, gif } = useContext(FileItemContext);
  const { isProcessing, currentUuid } = useContext(ProcessContext);
  const { status } = useContext(TranscodeContext);

  return (
    <>
      {((!isProcessing && status !== 'Loading') || uuid !== currentUuid) && <DeleteFileButton />}
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