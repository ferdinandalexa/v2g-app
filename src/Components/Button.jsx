function Button ({ className, onClick, variant = 'contained', disabled = false, children = 'Click me' }) {
  const getVariant = {
    contained: 'border-transparent bg-indigo-500 hover:bg-indigo-600 text-white disabled:bg-neutral-400 disabled:text-neutral-100 ',
    outlined: 'border-indigo-400 hover:border-indigo-500 text-indigo-300 hover:text-indigo-400 bg-transparent disabled:border-neutral-400 disabled:text-neutral-400 '
  };

  // const getStyles = () => primary ? primaryStyles : secondaryStyles;

  return (
    <button
      onClick={onClick}
      className={`${className} w-48 px-4 py-2 text-center transition-colors duration-75 rounded-md border-2 disabled:opacity-50 ${getVariant[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
