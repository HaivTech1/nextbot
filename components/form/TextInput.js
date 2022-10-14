const TextInput = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
    {...props}
  />
);

export default TextInput;
