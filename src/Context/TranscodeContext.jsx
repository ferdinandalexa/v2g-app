import { createContext, useEffect, useState } from 'react';

const TranscodeContext = createContext();

export const TranscodeContextProvider = ({ children }) => {
  const [isProcessing, setProcessing] = useState(false);
  const [currentUuid, setCurrentUuid] = useState();

  useEffect(() => {
    console.log(currentUuid);
  }, [currentUuid]);

  return (
    <TranscodeContext.Provider value={{ isProcessing, setProcessing, currentUuid, setCurrentUuid }}>
      {children}
    </TranscodeContext.Provider>
  );
};

export default TranscodeContext;
