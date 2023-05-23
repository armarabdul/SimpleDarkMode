import React from "react";
import "./Styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">{children}</span>
    </button>
  );
};

export default Button;
