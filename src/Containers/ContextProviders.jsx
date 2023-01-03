import { FilesContextProvider } from '../Context/FilesContext';
import { TranscodeContextProvider } from '../Context/TranscodeContext';
import { ProcessContextProvider } from '../Context/ProcessContext';

function ContextProviders ({ children }) {
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

export default ContextProviders;
