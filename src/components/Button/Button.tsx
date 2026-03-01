import React from "react";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "#1ea7fd",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;