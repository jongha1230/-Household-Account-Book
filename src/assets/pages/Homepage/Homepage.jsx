import ExpenseSummaryByMonth from "@components/ExpenseSummaryByMonth";
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

function Homepage() {
  const [filterMonth, setFilterMonth] = useState("");
  return (
    <StrMain className="main-container">
      <StrSection>
        <ExpenseForm />
      </StrSection>
      <StrSection>
        <MonthlyExpenses setFilterMonth={setFilterMonth} />
      </StrSection>
      <StrSection>
        <ExpenseSummaryByMonth filterMonth={filterMonth} />
      </StrSection>
      <StrSection>
        <ExpenseListByMonth filterMonth={filterMonth} />
      </StrSection>
    </StrMain>
  );
}

export default Homepage;
