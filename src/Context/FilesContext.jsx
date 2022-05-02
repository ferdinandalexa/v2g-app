import { createContext, useState } from 'react';

const FilesContext = createContext();

export const FilesContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};

export default FilesContext;
