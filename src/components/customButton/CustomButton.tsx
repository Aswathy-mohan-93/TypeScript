import React from "react";
import "./CustomButton.css";

interface CustomButtonProps {
  type: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  type,
  label,
}) => {
  return (
    <button className={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
