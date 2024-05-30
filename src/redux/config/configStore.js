import { configureStore } from "@reduxjs/toolkit";
import fetchedDataReducer from "../slices/fetchedDataSlice";
import modalReducer from "../slices/modalSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  localStorage.setItem("dataItem", JSON.stringify(state.fetchedData));
  return result;
};

const store = configureStore({
  reducer: {
    fetchedData: fetchedDataReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
