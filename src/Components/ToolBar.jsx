import { useContext } from 'react';
import { Link } from 'wouter';

import DeleteFileButton from './DeleteFileButton';
import ProcessButton from './ProcessButton';
import Download from './Download';

import IconEye from './Icons/IconEye';

import { FileItemContext } from './FileItem';
import TranscodeContext from '../Context/TranscodeContext';

import { process } from '../utilities/processDict';

function Toolbar () {
  const { uuid, name, gif, isProcessing } = useContext(FileItemContext);
  const { status } = useContext(TranscodeContext);

  return (
    <>
      {isProcessing
        ? <ProcessButton status={status} />
        : <> <DeleteFileButton /> <ProcessButton status={gif ? process.redo : process.pending} /> </>}
      {(gif && (status !== process.transcoding || !isProcessing)) &&
        <>
          <Link to={`/preview/${uuid}`}>
            <a className='inline-block mr-1 align-middle transition-colors rounded-full h-9 w-9'>
              <IconEye className='w-full h-full px-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-yellow-500 hover:bg-neutral-700 ' />
            </a>
          </Link>
          <Download file={gif} filename={`${name}.gif`} type='image/gif' className='px-8 w-max sm:w-48 sm:px-4'>Download</Download>
        </>}
    </>
  );
}

export default Toolbar;
