import { createContext, useEffect, useState } from 'react';
import useTranscoding from '../hooks/useTranscoding';

const TranscodeContext = createContext();

const PROCESS_DONE = 'Done';

export const TranscodeContextProvider = ({ children }) => {
  const [totalTranscoded, setTotalTranscoded] = useState(0);
  const { doTranscode, transcodeAllFiles, progress, status } = useTranscoding();

  useEffect(() => {
    if (status === PROCESS_DONE) setTotalTranscoded(total => total + 1);
  }, [status]);

  return (
    <TranscodeContext.Provider
      value={{
        totalTranscoded,
        setTotalTranscoded,
        doTranscode,
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
