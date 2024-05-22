import { useParams } from "react-router-dom";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseDetailWrapper({ data, updateExpense, removeExpense }) {
  const { itemId } = useParams();
  const expense = data.find((item) => item.id === itemId);
  console.log(expense);

  return (
    <ExpenseDetail
      expense={expense}
      updateExpense={updateExpense}
      removeExpense={removeExpense}
    />
  );
}

export default ExpenseDetailWrapper;
