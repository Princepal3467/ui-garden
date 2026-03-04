import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

interface StyledButtonProps {
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#ccc" : backgroundColor || "#007bff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};