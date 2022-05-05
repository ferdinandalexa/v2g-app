import { createPortal } from 'react-dom';

function Portal ({ children }) {
  return (
    createPortal(
      children,
      document.getElementById('root-modal')
    ));
}

export default Portal;
