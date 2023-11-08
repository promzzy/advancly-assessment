import { FC } from "react";

interface ButtonProps {
  children: any;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return(
    <button onClick={onClick}>{children || 'Submit'}</button>
  )
}

export default Button