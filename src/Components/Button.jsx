function Button ({ className, onClick, variant = 'contained', disabled = false, children = 'Click me' }) {
  const getVariant = {
    contained: 'border-transparent bg-slate-600 hover:bg-slate-700 text-neutral-200 disabled:bg-neutral-400 disabled:text-neutral-100 ',
    outlined: 'border-slate-500 hover:border-slate-600 text-slate-400 hover:text-slate-600 bg-transparent disabled:border-neutral-400 disabled:text-neutral-400 '
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
