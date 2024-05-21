import { useEffect, useState } from "react";
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
`;

const StrDateItemText = styled.span`
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

function ExpenseListByMonth({ data, filterMonth }) {
  console.log(data);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const month = new Date(item.date).getMonth();
      return month === filterMonth;
    });
    setFilteredData(filtered);
  }, [data, filterMonth]);

  return (
    <StrDiv>
      {filteredData.map((item) => (
        <StrItemWrapDiv key={item.id}>
          <StrDateItemWrapDiv>
            <span>{item.date}</span>
            <StrDateItemText>
              {item.item} - {item.description}
            </StrDateItemText>
          </StrDateItemWrapDiv>
          <span>{item.amount} 원</span>
        </StrItemWrapDiv>
      ))}
    </StrDiv>
  );
}

export default ExpenseListByMonth;
