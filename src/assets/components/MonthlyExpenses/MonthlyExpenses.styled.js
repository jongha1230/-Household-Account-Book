import styled from "styled-components";

const StrDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StrBtn = styled.button`
  text-align: center;
  font-size: 20px;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#2EC4B6" : "#ebebeb")};
  color: ${({ $active }) => ($active ? "white" : "black")};

  &:hover {
    background-color: #2ec4b6;
    color: white;
  }
`;

export { StrBtn, StrDiv };
