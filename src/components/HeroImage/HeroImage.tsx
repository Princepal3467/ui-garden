import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const Wrapper = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

export const HeroImage = ({ imageUrl, title }: HeroImageProps) => {
  return <Wrapper imageUrl={imageUrl}>{title}</Wrapper>;
};