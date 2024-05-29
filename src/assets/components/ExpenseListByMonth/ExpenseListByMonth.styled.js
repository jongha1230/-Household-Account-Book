import styled from "styled-components";

const StrDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StrItemWrapDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: transform 0.3s ease;

  span:last-child {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

const StrDateItemWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  overflow: hidden;

  span {
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const NoExpenseDiv = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ccc;
  padding: 20px;
  background-color: rgb(249, 249, 249);
  border-radius: 8px;
`;

const SelectWrapDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
`;

const Select = styled.select`
  appearance: none;
  padding: 8px 24px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  outline: none;
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export {
  ArrowIcon,
  NoExpenseDiv,
  Select,
  SelectWrapDiv,
  StrDateItemWrapDiv,
  StrDiv,
  StrItemWrapDiv,
};
