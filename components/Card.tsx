import React from "react";
import classnames from "classnames";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = props => {
  const { children, className } = props;
  return (
    <div className={classnames("p-4 bg-white rounded-lg shadow-xl", className)}>
      {children}
    </div>
  );
};
export default Card;
