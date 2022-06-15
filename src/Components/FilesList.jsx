import File from './File';
import Button from './Button';
import { useContext, useEffect, useState } from 'react';

import FilesContext from '../Context/FilesContext';
import ProcessContext from '../Context/ProcessContext';
import TranscodeContext from '../Context/TranscodeContext';

function FilesList () {
  const [disabled, setDisabled] = useState(false);
  const { files, setFiles } = useContext(FilesContext);
  const { totalTranscoded, transcodeAllFiles } = useContext(TranscodeContext);

  useEffect(() => {
    files.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [files]);

  return (
    <aside className='w-full p-2 overflow-hidden divide-y divide-opacity-30 rounded-xl bg-neutral-800 divide-neutral-700 '>
      <h2 className='px-4 pt-4 pb-2 text-lg text-neutral-100'>Files uploaded:</h2>
      {files.map(({ name, uuid, dataURL, extension, gif }) => {
        return (
          <File
            key={uuid}
            uuid={uuid}
            name={name}
            extension={extension}
            dataURL={dataURL}
            gif={gif}
          />
        );
      })}
      <div className='flex flex-row-reverse items-center justify-center gap-4 px-4 py-2 pt-4'>
        <Button
          onClick={async () => {
            await transcodeAllFiles();
          }}
          className='flex-auto'
          disabled={disabled || totalTranscoded === files.length}
        >
          Convert all
        </Button>
        <Button
          onClick={() => { setFiles([]); }}
          variant='outlined'
          className='flex-auto'
          disabled={disabled}
        >
          Remove files
        </Button>
      </div>
    </aside>
  );
}

export default FilesList;
