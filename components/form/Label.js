const Label = ({ className, children, ...props }) => (
  <label
    className={`${className} mb-2 block text-xs font-bold uppercase text-black dark:text-white`}
    {...props}
  >
    {children}
  </label>
);

export default Label;
