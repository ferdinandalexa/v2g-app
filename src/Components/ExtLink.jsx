function ExtLink ({ url, children, type, className }) {
  return (
    <a href={url} target='_blank' rel='noreferrer noopener' type={type} className={`text-indigo-300 opacity-80 ${className}`}>{children}</a>
  );
}

export default ExtLink;
