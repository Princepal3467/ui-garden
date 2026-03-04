import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
`;

export const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};