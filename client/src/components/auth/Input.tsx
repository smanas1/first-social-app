import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onchange?: (e: ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onchange }) => {
  return (
    <input
      className="border-2 bg-transparent text-white w-80 outline-none border-green-500 my-2 py-2 px-2 rounded-md"
      type={type}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};

export default Input;
