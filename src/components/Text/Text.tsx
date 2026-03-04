import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

interface StyledTextProps {
  color?: string;
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
  align?: "left" | "center" | "right";
}

const fontSizes = {
  small: "14px",
  medium: "16px",
  large: "22px",
};

const StyledText = styled.p<StyledTextProps>`
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size = "medium" }) => fontSizes[size]};
  font-weight: ${({ weight = "normal" }) => weight};
  text-align: ${({ align = "left" }) => align};
  margin: 8px 0;
`;

export const Text: React.FC<TextProps> = ({
  children,
  color,
  size = "medium",
  weight = "normal",
  align = "left",
  variant = "p",
}) => {
  return (
    <StyledText
      as={variant}
      color={color}
      size={size}
      weight={weight}
      align={align}
    >
      {children}
    </StyledText>
  );
};