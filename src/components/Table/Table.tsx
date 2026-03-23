import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

interface StyledTableProps {
  headerBgColor?: string;
  headerTextColor?: string;
  rowBgColor?: string;
  borderColor?: string;
  striped?: boolean;
}

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ borderColor }) => borderColor || "#ddd"};

  th {
    background-color: ${({ headerBgColor }) => headerBgColor || "#007bff"};
    color: ${({ headerTextColor }) => headerTextColor || "#fff"};
    padding: 10px;
    border: 1px solid ${({ borderColor }) => borderColor || "#ddd"};
    text-align: left;
  }

  td {
    padding: 10px;
    border: 1px solid ${({ borderColor }) => borderColor || "#ddd"};
    background-color: ${({ rowBgColor }) => rowBgColor || "#fff"};
  }

  ${({ striped }) =>
    striped &&
    `
    tr:nth-child(even) td {
      background-color: #f2f2f2;
    }
  `}
`;

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  headerBgColor,
  headerTextColor,
  rowBgColor,
  borderColor,
  striped = false,
}) => {
  return (
    <StyledTable
      headerBgColor={headerBgColor}
      headerTextColor={headerTextColor}
      rowBgColor={rowBgColor}
      borderColor={borderColor}
      striped={striped}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
