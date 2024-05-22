import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseDetailWrapper() {
  const { itemId } = useParams();
  const fetchedData = useSelector((state) => state.fetchedData);
  const expense = fetchedData.find((item) => item.id === itemId);
  console.log(expense);

  return <ExpenseDetail expense={expense} />;
}

export default ExpenseDetailWrapper;
