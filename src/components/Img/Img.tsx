import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ width?: string }>`
  width: ${({ width }) => width || "100%"};
  height: auto;
`;

export const Img = ({ src, alt, width }: ImgProps) => {
  return <StyledImg src={src} alt={alt} width={width} />;
};