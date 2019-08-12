import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
`;

export const CustomTable = styled.table`
  width: 100%;
  &,
  th,
  td,
  tr {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }

  th {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 3px;
  border-radius: 4px;
  background-color: #ff4d4d;
  color: #fff;
  margin-left: 10px;
`;

export const Total = styled.p`
  margin-top: 10px;
  font-weight: bold;
  align-self: flex-end;
`;
