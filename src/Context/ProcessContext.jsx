import { createContext, useState } from 'react';

const ProcessContext = createContext();

export const ProcessContextProvider = ({ children }) => {
  const [currentUuid, setCurrentUuid] = useState();

  return (
    <ProcessContext.Provider value={{ currentUuid, setCurrentUuid }}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProcessContext;
