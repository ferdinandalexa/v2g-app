function ExtLink ({ url, children }) {
  return (
    <a href={url} target='_blank' rel='noreferrer noopener' className='text-slate-400'>{children}</a>
  );
}

export default ExtLink;
