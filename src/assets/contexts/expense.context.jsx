import { createContext, useContext, useEffect, useState } from "react";
import fetchData from "../../fetchData";

const initialValue = {
  addExpense: () => {},
  updateExpense: () => {},
  removeExpense: () => {},
};

export const ExpenseContext = createContext(initialValue);

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      const localData = JSON.parse(localStorage.getItem("dataItem")) || [];
      const combinedData = [
        ...fetchedData.filter(
          (item) => !localData.some((localItem) => localItem.id === item.id)
        ),
        ...localData,
      ];
      setFetchedData(combinedData);
      localStorage.setItem("dataItem", JSON.stringify(combinedData));
    };
    loadData();
  }, []);

  const addExpense = (newExpense) => {
    const updatedData = [...fetchedData, newExpense];
    localStorage.setItem("dataItem", JSON.stringify(updatedData));
    setFetchedData((fetchedData) => [...fetchedData, newExpense]);
  };

  const updateExpense = (targetExpense, modifiedExpense) => {
    const updatedData = fetchedData.map((expense) =>
      expense.id === targetExpense.id ? modifiedExpense : expense
    );
    localStorage.setItem("dataItem", JSON.stringify(updatedData));
    setFetchedData(updatedData);
  };

  const removeExpense = (targetExpense) => {
    const updatedData = fetchedData.filter(
      (expense) => expense.id !== targetExpense.id
    );
    localStorage.setItem("dataItem", JSON.stringify(updatedData));
    setFetchedData(updatedData);
  };

  const value = {
    fetchedData,
    addExpense,
    updateExpense,
    removeExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
