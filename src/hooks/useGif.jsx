import { useContext } from 'react';

import FilesContext from '../Context/FilesContext';
import ProcessContext from '../Context/ProcessContext';

function useGif () {
  const { files, setFiles } = useContext(FilesContext);
  const { currentUuid } = useContext(ProcessContext);

  const setGif = (transcodedFile) => {
    const blobGIF = new Blob([transcodedFile.buffer], { type: 'image/gif' });
    const urlBloblGIF = URL.createObjectURL(blobGIF);
    const upadatedFiles = files.map(file => {
      return file.uuid === currentUuid
        ? Object.assign(file, { gif: urlBloblGIF })
        : file;
    });

    setFiles(upadatedFiles);
  };

  return { setGif };
}

export default useGif;
