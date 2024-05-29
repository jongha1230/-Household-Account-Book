import { useEffect, useState } from "react";
import { StrBtn, StrDiv } from "./MonthlyExpenses.styled";

function MonthlyExpenses({ setFilterMonth }) {
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
          $active={activeMonth === index}
          onClick={() => handleMonthClick(index)}
        >
          {month}
        </StrBtn>
      ))}
    </StrDiv>
  );
}

export default MonthlyExpenses;
