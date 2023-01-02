import { useContext } from 'react';

import FilesContext from '../Context/FilesContext';
import TranscodeContext from '../Context/TranscodeContext';

function useDeleteFile (uuid) {
  const { files, setFiles } = useContext(FilesContext);
  const { setTotalTranscoded } = useContext(TranscodeContext);

  setFiles(files.filter(file => file.uuid !== uuid));
  setTotalTranscoded(total => total - 1);
}

export default useDeleteFile;
