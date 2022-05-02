import { createContext, useEffect } from 'react';
import useTranscoding from '../hooks/useTranscoding';

const TranscodingContext = createContext();

export const TranscodingContextProvider = ({ children }) => {
  const [transcodedFile, doTranscode, progress] = useTranscoding();

  useEffect(() => {
    // console.log(files);
  }, [transcodedFile]);

  return (
    <TranscodingContext.Provider value={{ transcodedFile, doTranscode, progress }}>
      {children}
    </TranscodingContext.Provider>
  );
};

export default TranscodingContext;
