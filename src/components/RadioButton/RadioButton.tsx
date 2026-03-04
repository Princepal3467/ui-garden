import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

interface StyledProps {
  color?: string;
  labelColor?: string;
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: "14px",
  medium: "16px",
  large: "20px",
};

const Wrapper = styled.label<StyledProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ size = "medium" }) => sizes[size]};
  color: ${({ labelColor }) => labelColor || "#333"};
  cursor: pointer;

  input[type="radio"] {
    accent-color: ${({ color }) => color || "#007bff"};
    cursor: pointer;
  }

  input:disabled {
    cursor: not-allowed;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
  color,
  labelColor,
  size = "medium",
  onChange,
}) => {
  return (
    <Wrapper color={color} labelColor={labelColor} size={size}>
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </Wrapper>
  );
};