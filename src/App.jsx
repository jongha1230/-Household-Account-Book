import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import router from "./assets/routes/router.jsx";
import fetchData from "./fetchData";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData);
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

  return (
    <>
      <GlobalStyle />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
