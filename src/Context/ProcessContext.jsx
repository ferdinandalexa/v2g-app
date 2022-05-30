import { createContext, useState } from 'react';

const ProcessContext = createContext();

export const ProcessContextProvider = ({ children }) => {
  const [isProcessing, setProcessing] = useState(false);
  const [currentUuid, setCurrentUuid] = useState();

  return (
    <ProcessContext.Provider value={{ isProcessing, setProcessing, currentUuid, setCurrentUuid }}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProcessContext;
