import styled from "styled-components";

export const Container = styled.div`
  form {
    padding: 10px;
    input {
      margin: 0 10px;
      padding: 5px;
      border-radius: 4px;
      border: 0.5px solid #888888;
    }
    span {
      color: #ff4d4d;
      font-style: italic;
      font-size: 11px;
      align-self: center;
    }
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: #5cb85c;
  color: #fff;
  margin-left: 10px;
  text-align: center;
`;
