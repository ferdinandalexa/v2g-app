import { useContext, createContext, useEffect, useState } from 'react';
import useTranscoding from '../hooks/useTranscoding';

import FilesContext from './FilesContext';
import { process } from '../utilities/processDict';
import ProcessContext from './ProcessContext';

const TranscodeContext = createContext();

export const TranscodeContextProvider = ({ children }) => {
  const { files } = useContext(FilesContext);
  const { currentUuid } = useContext(ProcessContext);
  const { doTranscode, stopTranscoding, progress, status } = useTranscoding();
  const [totalTranscoded, setTotalTranscoded] = useState(new Set([]));

  async function transcodeAllFiles () {
    for (const { uuid, name, extension, dataURL, gif } of files) {
      if (!gif) await doTranscode(uuid, `${name}.${extension}`, dataURL);
    }
  }

  useEffect(() => {
    if (status === process.done) setTotalTranscoded(total => total.add(currentUuid));
  }, [status]);

  return (
    <TranscodeContext.Provider
      value={{
        totalTranscoded,
        setTotalTranscoded,
        doTranscode,
        stopTranscoding,
        transcodeAllFiles,
        progress,
        status
      }}
    >
      {children}
    </TranscodeContext.Provider>
  );
};

export default TranscodeContext;
