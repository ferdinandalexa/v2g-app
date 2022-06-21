function Download ({ file, filename = 'image.gif', type, className, children = 'Download' }) {
  return (
    <a
      href={file}
      download={filename}
      type={type}
      className={`w-48 px-4 py-2 text-center transition-colors rounded-md bg-green-600 hover:bg-green-700 text-neutral-100 ${className}`}
    >
      {children}
    </a>
  );
}

export default Download;
