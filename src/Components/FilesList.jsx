import File from './File';
import Button from './Button';
import FilesContext from '../Context/FilesContext';
import { useContext, useEffect, useState } from 'react';

function FilesList () {
  const [disabled, setDisabled] = useState(false);
  const { files, setFiles } = useContext(FilesContext);

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
      <div className='flex flex-row items-center justify-center gap-4 px-4 py-2'>
        {/* <Button className='flex-auto'>Convert all</Button> */}
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
