type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  error?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onChange: any;
  onBlur: any;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  name,
  error,
}) => {
  return (
    <input
      value={value}
      onBlur={onBlur}
      name={name}
      className={`border bg-transparent w-80 outline-none ${
        error && "border-red-500"
      }  my-2 py-2 px-2 rounded-sm`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
