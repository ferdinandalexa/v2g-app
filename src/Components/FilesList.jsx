import File from './File';
import FilesContext from '../Context/FilesContext';
import { useContext } from 'react';

function FilesList () {
  const { files } = useContext(FilesContext);
  return (
    <aside className='w-full p-2 overflow-hidden divide-y divide-opacity-30 rounded-xl bg-neutral-800 divide-neutral-700 '>
      <h2 className='px-4 pt-4 pb-2 text-lg text-neutral-100'>Files uploaded:</h2>
      {files.map(({ name, uuid, dataURL, gif, isTranscoded, isProcessing }) => {
        return (
          <File
            key={uuid}
            uuid={uuid}
            name={`${name}`}
            dataURL={dataURL}
            gif={gif}
            isTranscoded={isTranscoded}
            isProcessing={isProcessing}
          />
        );
      })}
    </aside>
  );
}

export default FilesList;
