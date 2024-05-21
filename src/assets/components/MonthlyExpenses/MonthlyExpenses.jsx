import { useEffect, useState } from "react";
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
  background-color: ${({ active }) => (active ? "#2EC4B6" : "#ebebeb")};
  color: ${({ active }) => (active ? "white" : "black")};

  &:hover {
    background-color: #2ec4b6;
    color: white;
  }
`;

function MonthlyExpenses({ setFilterMonth }) {
  console.log("월별 컴포넌트 리렌더링");
  const [activeMonth, setActiveMonth] = useState(null);

  useEffect(() => {
    const storedMonth = localStorage.getItem("selectedMonth");
    if (storedMonth !== null) {
      setActiveMonth(parseInt(storedMonth));
      setFilterMonth(parseInt(storedMonth));
    } else {
      const currentMonth = new Date().getMonth();
      setActiveMonth(currentMonth);
      setFilterMonth(currentMonth);
    }
  }, [setFilterMonth]);

  const handleMonthClick = (index) => {
    setActiveMonth(index);
    setFilterMonth(index);
    localStorage.setItem("selectedMonth", index);
  };

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <StrDiv>
      {months.map((month, index) => (
        <StrBtn
          key={index}
          active={activeMonth === index}
          onClick={() => handleMonthClick(index)}
        >
          {month}
        </StrBtn>
      ))}
    </StrDiv>
  );
}

export default MonthlyExpenses;
