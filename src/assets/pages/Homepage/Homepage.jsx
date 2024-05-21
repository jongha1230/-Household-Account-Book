import { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "../../components/ExpenseForm";
import ExpenseListByMonth from "../../components/ExpenseListByMonth";
import MonthlyExpenses from "../../components/MonthlyExpenses";

const StrMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StrSection = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
`;

function Homepage({ data, addExpense }) {
  const [filterMonth, setFilterMonth] = useState("");
  return (
    <StrMain className="main-container">
      <StrSection>
        <ExpenseForm addExpense={addExpense} />
      </StrSection>
      <StrSection>
        <MonthlyExpenses setFilterMonth={setFilterMonth} />
      </StrSection>
      <StrSection>
        <ExpenseListByMonth data={data} filterMonth={filterMonth} />
      </StrSection>
    </StrMain>
  );
}

export default Homepage;