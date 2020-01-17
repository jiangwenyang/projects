import React from "react";
import classNames from "classnames";
import { SizeType } from "../_util/type";

interface ButtonProps {
  size: SizeType;
}

const Button: React.FC<ButtonProps> = props => {
  const { size, children } = props;
  const classes = classNames({});
  return <button className={classes}>{children}</button>;
};

export default Button;
