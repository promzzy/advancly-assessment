import { FC } from "react";
import classes from "./Dropdown.module.css";

export interface DropdownProps {
  options?: any[];
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string | any;
  onChange?: (event: any) => void;
}

const Dropdown: FC<DropdownProps> = ({
  options = [],
  className,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <label>{placeholder}</label>
      <select
        name={name}
        id="select"
        value={value}
        onChange={onChange}
        className={`${classes.selector} ${className}`}
        placeholder={placeholder}
      >
        {options.map((option) => (
          <option className={classes.optionSelect} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
