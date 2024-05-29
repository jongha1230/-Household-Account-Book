import { configureStore } from "@reduxjs/toolkit";
import fetchedDataReducer from "../slices/fetchedDataSlice";
import modalReducer from "../slices/modalSlice";

const store = configureStore({
  reducer: {
    fetchedData: fetchedDataReducer,
    modal: modalReducer,
  },
});

export default store;
