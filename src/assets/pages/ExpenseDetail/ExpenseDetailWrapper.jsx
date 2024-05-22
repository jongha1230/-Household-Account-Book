import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ExpenseContext } from "../../../App";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseDetailWrapper() {
  const { fetchedData } = useContext(ExpenseContext);
  const { itemId } = useParams();
  const expense = fetchedData.find((item) => item.id === itemId);
  console.log(expense);

  return <ExpenseDetail expense={expense} />;
}

export default ExpenseDetailWrapper;
