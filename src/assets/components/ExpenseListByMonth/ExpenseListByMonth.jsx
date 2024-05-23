import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loadFetchedData } from "@redux/slices/fetchedDataSlice";
import {
  ArrowIcon,
  NoExpenseDiv,
  Select,
  SelectWrapDiv,
  StrDateItemWrapDiv,
  StrDiv,
  StrItemWrapDiv,
} from "./ExpenseListByMonth.styled";

function ExpenseListByMonth({ filterMonth }) {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.fetchedData);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState("amount");

  useEffect(() => {
    dispatch(loadFetchedData());
  }, [dispatch]);

  useEffect(() => {
    const filtered = fetchedData.filter((item) => {
      const month = new Date(item.date).getMonth();
      return month === filterMonth;
    });

    switch (sortOption) {
      case "amount":
        filtered.sort((a, b) => b.amount - a.amount); // 가격 순
        break;
      case "category":
        filtered.sort((a, b) => a.item.localeCompare(b.item)); // 항목 순
        break;
      case "date":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); // 최신 순
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  }, [fetchedData, filterMonth, sortOption]);

  const formattedAmount = (amount) =>
    new Intl.NumberFormat("ko-KR").format(amount);

  return (
    <StrDiv>
      <SelectWrapDiv>
        <Select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="amount">가격 순</option>
          <option value="category">항목 순</option>
          <option value="date">최신 순</option>
        </Select>
        <ArrowIcon>&#9660;</ArrowIcon>
      </SelectWrapDiv>
      {filteredData.length === 0 ? (
        <NoExpenseDiv>지출이 없습니다.</NoExpenseDiv>
      ) : (
        filteredData.map((expense) => (
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
        ))
      )}
    </StrDiv>
  );
}

export default ExpenseListByMonth;
