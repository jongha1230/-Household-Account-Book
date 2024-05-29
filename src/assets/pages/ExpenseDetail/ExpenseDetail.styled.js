import styled from "styled-components";

export const StrForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 8px;

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: 10px 0px 20px 0px;
  }

  div {
    display: flex;
    gap: 10px;

    button {
      color: white;
      padding: 12px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color 0.3s ease;

      &.edit-btn {
        background-color: rgba(51, 102, 255, 1);
      }

      &.edit-btn:hover {
        background-color: rgb(43, 90, 179);
      }

      &.delete-btn {
        background-color: rgba(255, 51, 102, 1);
      }

      &.delete-btn:hover {
        background-color: rgba(255, 0, 51, 1);
      }

      &.back-btn {
        background-color: rgba(128, 128, 128, 0.8);
      }

      &.back-btn:hover {
        background-color: rgba(80, 80, 80, 0.8);
      }
    }
  }
`;
