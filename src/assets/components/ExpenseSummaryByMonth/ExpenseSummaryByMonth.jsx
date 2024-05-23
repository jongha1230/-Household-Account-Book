import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CategoryDiv,
  CategoryWrapDiv,
  GraphBar,
  TotalAmount,
  TotalAmountGraph,
} from "./ExpenseSummaryByMonth.styled";

function ExpenseSummaryByMonth({ filterMonth }) {
  const [totalMonthlyExpense, setTotalMonthlyExpense] = useState(0);
  const [categoryExpenses, setCategoryExpenses] = useState({});
  const fetchedData = useSelector((state) => state.fetchedData);

  useEffect(() => {
    const filtered = fetchedData.filter((item) => {
      const month = new Date(item.date).getMonth();
      return month === filterMonth;
    });

    const initialCategoryExpenses = {
      여행: 0,
      미용: 0,
      도서: 0,
      식비: 0,
      기타: 0,
    };

    const updatedCategoryExpenses = filtered.reduce(
      (acc, currentItem) => {
        const category = currentItem.item;
        const amount = currentItem.amount;

        const categoryName = ["여행", "미용", "도서", "식비"].includes(category)
          ? category
          : "기타";

        acc[categoryName] += amount;

        return acc;
      },
      { ...initialCategoryExpenses }
    );

    setTotalMonthlyExpense(
      formattedAmount(
        Object.values(updatedCategoryExpenses).reduce(
          (acc, current) => acc + current,
          0
        )
      )
    );
    setCategoryExpenses(updatedCategoryExpenses);
  }, [fetchedData, filterMonth]);

  const formattedAmount = (amount) =>
    new Intl.NumberFormat("ko-KR").format(amount);

  const calculateCategoryPercentage = (categoryExpense) => {
    const totalExpense = Object.values(categoryExpenses).reduce(
      (acc, current) => acc + current,
      0
    );

    if (totalExpense === 0) return "0.00%";

    const percentage = (categoryExpense / totalExpense) * 100;
    return percentage.toFixed(2) + "%";
  };

  return (
    <>
      <TotalAmount>
        {filterMonth + 1}월 총 지출: {totalMonthlyExpense} 원
      </TotalAmount>
      <TotalAmountGraph>
        {Object.entries(categoryExpenses).map(([category, expense]) => (
          <GraphBar
            key={category}
            $category={category}
            style={{ width: calculateCategoryPercentage(expense) }}
          />
        ))}
      </TotalAmountGraph>
      <CategoryWrapDiv>
        {Object.entries(categoryExpenses).map(([category, expense]) => {
          if (expense > 0) {
            return (
              <CategoryDiv key={category} $category={category}>
                <div></div>
                {category}: {formattedAmount(expense)}원 (
                {calculateCategoryPercentage(expense)})
              </CategoryDiv>
            );
          }
          return null;
        })}
      </CategoryWrapDiv>
    </>
  );
}

export default ExpenseSummaryByMonth;
