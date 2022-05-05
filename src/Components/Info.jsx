import { useState } from 'react';
import IconInfo from './Icons/IconInfo';
import ModalInfo from './ModalInfo';

function Info () {
  const [stateModal, setStateModal] = useState(false);

  const openModal = () => setStateModal(true);
  const closeModal = () => setStateModal(false);

  return (
    <>
      <span onClick={openModal} className='relative z-10'>
        <IconInfo className='fill-neutral-500 hover:fill-blue-300 transition-colors' width='20px' height='20px' />
      </span>
      {stateModal &&
        <ModalInfo title='Attribution' onClose={closeModal}>
          This project uses <a className='text-slate-400' href='https://github.com/ffmpegwasm/ffmpeg.wasm#readme' target='_blank' rel='noreferrer noopener'>FFMPEG.WASM</a>, a pure WebAssembly / JavaScript port of <a className='text-slate-400' href='https://ffmpeg.org' target='_blank' rel='noreferrer noopener'>FFmpeg</a>.
        </ModalInfo>}
    </>
  );
}

export default Info;
