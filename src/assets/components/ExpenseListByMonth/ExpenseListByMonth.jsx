import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadFetchedData } from "../../../redux/config/slices/fetchedDataSlice";
import {
  StrDateItemWrapDiv,
  StrDiv,
  StrItemWrapDiv,
} from "./ExpenseListByMonth.styled";

function ExpenseListByMonth({ filterMonth }) {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.fetchedData);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(loadFetchedData());
  }, [dispatch]);

  useEffect(() => {
    const filtered = fetchedData.filter((item) => {
      const month = new Date(item.date).getMonth();
      return month === filterMonth;
    });
    setFilteredData(filtered);
  }, [fetchedData, filterMonth]);

  const formattedAmount = (amount) =>
    new Intl.NumberFormat("ko-KR").format(amount);

  return (
    <StrDiv>
      {filteredData.map((expense) => (
        <Link key={expense.id} to={`/expenses/${expense.id}`}>
          <StrItemWrapDiv>
            <StrDateItemWrapDiv>
              <span>{expense.date}</span>
              <span>
                {expense.item} - {expense.description}
              </span>
            </StrDateItemWrapDiv>
            <span>{formattedAmount(expense.amount)}원</span>
          </StrItemWrapDiv>
        </Link>
      ))}
    </StrDiv>
  );
}

export default ExpenseListByMonth;
