import { type ReactElement } from "react";
const Button: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({ onClick }): ReactElement => {
  return <button onClick={onClick}></button>;
};

export default Button;
