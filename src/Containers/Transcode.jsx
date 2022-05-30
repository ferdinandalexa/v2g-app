import { FilesContextProvider } from '../Context/FilesContext';
import { TranscodeContextProvider } from '../Context/TranscodeContext';
import { ProcessContextProvider } from '../Context/ProcessContext';

function Transcode ({ children }) {
  return (
    <FilesContextProvider>
      <ProcessContextProvider>
        <TranscodeContextProvider>
          {children}
        </TranscodeContextProvider>
      </ProcessContextProvider>
    </FilesContextProvider>
  );
}

export default Transcode;
