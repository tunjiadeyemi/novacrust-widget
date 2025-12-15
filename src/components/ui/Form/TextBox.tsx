import React from 'react';

interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  name,
  ...rest
}) => {
  const id = name || label;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-[#013941] text-sm lg:text-base font-medium block mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#E0E0E0] rounded-[30px] px-5 h-12.5 lg:h-15 text-base outline-none"
        {...rest}
      />
    </div>
  );
};

export default TextBox;
