function useExpenseDetail(itemId) {
  const data = localStorage.getItem("dataItem");
  const parsedData = JSON.parse(data);
  const expense = parsedData.find((item) => item.id === itemId);

  return expense;
}

export default useExpenseDetail;
