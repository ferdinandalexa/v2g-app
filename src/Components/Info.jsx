import { useState } from 'react';
import ExtLink from './ExtLink';
import IconInfo from './Icons/IconInfo';
import ModalInfo from './ModalInfo';

function Info () {
  const [stateModal, setStateModal] = useState(false);

  const openModal = () => setStateModal(true);
  const closeModal = () => setStateModal(false);

  return (
    <>
      <span onClick={openModal} className='relative z-10'>
        <IconInfo className='transition-colors fill-neutral-500 hover:fill-blue-300' width='20px' height='20px' />
      </span>
      {stateModal &&
        <ModalInfo title='Attribution' onClose={closeModal}>
          This project uses <ExtLink url='https://github.com/ffmpegwasm/ffmpeg.wasm#readme'>FFMPEG.WASM</ExtLink>, a pure WebAssembly / JavaScript port of <ExtLink url='https://ffmpeg.org'>FFmpeg</ExtLink>.
        </ModalInfo>}
    </>
  );
}

export default Info;
