import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
