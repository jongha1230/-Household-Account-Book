import styled from "styled-components";

export const StrForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    min-width: 120px;

    input {
      padding: 8px;
      border: 1px solid #ccc;
      margin-top: 5px;
      border-radius: 8px;
    }
  }
  button {
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    background-color: rgba(51, 102, 255, 1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgb(43, 90, 179);
    }
  }
`;
