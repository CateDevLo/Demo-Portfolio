const Label = ({ children, className }) => {
  return (
    <span
      className={`inline-block bg-indigo-600 text-white rounded-full py-2 px-5 font-semibold text-sm lg:text-base uppercase shadow-md hover:bg-indigo-700 transition-all duration-300 ${className}`}
    >
      {children}
    </span>
  );
};

export default Label;