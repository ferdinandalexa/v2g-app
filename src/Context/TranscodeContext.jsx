import { createContext } from 'react';
import useTranscoding from '../hooks/useTranscoding';

const TranscodeContext = createContext();

export const TranscodeContextProvider = ({ children }) => {
  const { doTranscode, progress, status } = useTranscoding();
  return (
    <TranscodeContext.Provider
      value={{
        doTranscode,
        progress,
        status
      }}
    >
      {children}
    </TranscodeContext.Provider>
  );
};

export default TranscodeContext;
