import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

interface StyledLabelProps {
  color?: string;
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
}

const fontSizes = {
  small: "14px",
  medium: "16px",
  large: "20px",
};

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size = "medium" }) => fontSizes[size]};
  font-weight: ${({ weight = "normal" }) => weight};
  margin-bottom: 4px;
  display: inline-block;
`;

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  size = "medium",
  weight = "normal",
  required = false,
}) => {
  return (
    <StyledLabel color={color} size={size} weight={weight}>
      {text} {required && <span style={{ color: "red" }}>*</span>}
    </StyledLabel>
  );
};
