import { ComponentProps, useState } from "react";
import close from "../../assets/close.png";

type InputPropsType = {
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  onClose: () => void;
  classname: string;
  showIcon: boolean;
  options: string[];
};

export const Input = ({
  onChange,
  onClose,
  classname,
  showIcon,
  options,
  onSelect,
  ...props
}: InputPropsType & Omit<ComponentProps<"input">, "onSelect" | "onChange">) => {
  const [showOptions, setShowOptions] = useState(false);

  function handleSelectOption(opt: string) {
    onSelect(opt);
    setShowOptions(false);
  }
  return (
    <div className="relative">
      <input
        {...props}
        className={classname}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => setShowOptions(true)}
      />
      {showIcon && (
        <div className="w-3 h-3 cursor-pointer absolute top-3 right-4">
          <img src={close} onClick={onClose} />
        </div>
      )}
      {options && showOptions && (
        <div className="absolute bg-slate-100 text-black w-full max-h-72 overflow-auto rounded-md z-20">
          {options.map((opt) => {
            return (
              <li
                key={opt}
                onClick={() => handleSelectOption(opt)}
                className="pl-4 p-2 cursor-pointer hover:bg-blue-200 list-none"
              >
                {opt}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};
