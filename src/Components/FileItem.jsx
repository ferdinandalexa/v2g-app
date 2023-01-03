import { createContext } from 'react';

import ToolBar from './ToolBar';

export const FileItemContext = createContext();

function FileItem ({
  uuid,
  name,
  extension,
  dataURL,
  gif
}) {
  return (
    <div className='flex flex-row flex-wrap items-center justify-between w-full px-6 py-4'>
      <h3 className='inline-block w-full text-base text-neutral-400 sm:w-max'>{!gif ? `${name}.${extension}` : `${name}.gif`}</h3>
      <div className='flex flex-row-reverse items-center justify-end flex-grow gap-3 mt-4 sm:justify-end sm:flex-row sm:mt-0 sm:ml-4'>
        <FileItemContext.Provider value={{ uuid, name, extension, dataURL, gif }}>
          <ToolBar />
        </FileItemContext.Provider>
      </div>
    </div>
  );
}

export default FileItem;
