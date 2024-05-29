import { useParams } from "react-router-dom";
import { useExpense } from "../../contexts/expense.context";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseDetailWrapper() {
  const { fetchedData } = useExpense();
  const { itemId } = useParams();
  const expense = fetchedData.find((item) => item.id === itemId);
  console.log(expense);

  return <ExpenseDetail expense={expense} />;
}

export default ExpenseDetailWrapper;
