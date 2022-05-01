import { createContext, useEffect, useState } from 'react';

const FilesContext = createContext();

export const FilesContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // console.log(files);
  }, [files]);

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};

export default FilesContext;
