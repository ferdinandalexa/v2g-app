import { useContext, useEffect, useState } from 'react';
import { Link } from 'wouter';

import Button from './Button';
import ProgressBar from './ProgressBar';
import Download from './Download';
import ExtLink from './ExtLink';

import IconDelete from './Icons/IconDelete';
import IconEye from './Icons/IconEye';

import FilesContext from '../Context/FilesContext';
import TranscodeContext from '../Context/TranscodeContext';
import ProcessContext from '../Context/ProcessContext';

function File ({ uuid, name, extension, dataURL, gif }) {
  const { files, setFiles } = useContext(FilesContext);
  const { isProcessing, currentUuid } = useContext(ProcessContext);
  const { doTranscode, progress, status } = useContext(TranscodeContext);

  const [enableTranscode, setEnableTranscode] = useState(true);
  const [isTranscoded, setTranscoded] = useState(false);
  const [hasGif, setHasGif] = useState(false);

  const deleteFile = () => {
    setFiles(files.filter(file => file.uuid !== uuid));
  };

  useEffect(() => {
    if (isProcessing) {
      if (uuid !== currentUuid) setEnableTranscode(false);
    } else setEnableTranscode(true);

    if (gif) {
      setTranscoded(true);
      setHasGif(true);
    }
  }, [isProcessing, gif]);

  const display = {
    Pending: <Button onClick={() => doTranscode(uuid, `${name}.${extension}`, dataURL)} disabled={!enableTranscode}>Convert file</Button>,
    Loading: <Button disabled={!enableTranscode}>Loading...</Button>,
    Transcoding: <ProgressBar done={parseInt(progress * 100)} />,
    Done: <Download file={gif} filename={`${name}.gif`}>Descargar</Download>
  };

  return (
    <div className='flex flex-row flex-wrap items-center justify-between w-full px-6 py-4'>
      <h3 className='inline-block w-full text-base text-neutral-400 sm:w-max'>{!isTranscoded ? `${name}.${extension}` : `${name}.gif`}</h3>
      <div className='flex flex-row-reverse items-center justify-end flex-grow gap-3 mt-4 sm:justify-end sm:flex-row sm:mt-0 sm:ml-4'>
        <button title={`Remove ${name}.${extension} file`} className='inline-block align-middle transition-colors rounded-full w-9 h-9' onClick={deleteFile}>
          <IconDelete className='w-full h-full p-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-red-500 hover:bg-neutral-700' />
        </button>
        {hasGif &&
          <Link to={`/preview/${uuid}`}>
            <a className='inline-block mr-1 align-middle transition-colors rounded-full h-9 w-9'>
              <IconEye className='w-full h-full px-1 transition-colors rounded-full fill-neutral-700 bg-neutral-800 hover:fill-yellow-500 hover:bg-neutral-700 ' />
            </a>
          </Link>}
        {
          hasGif
            ? <Download file={gif} filename={`${name}.gif`} type='image/gif'>Descargar</Download>
            : enableTranscode ? display[status] : display.Pending
        }
      </div>
    </div>
  );
}

export default File;
