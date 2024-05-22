import { configureStore } from "@reduxjs/toolkit";
import fetchedDataReducer from "./slices/fetchedDataSlice";

const store = configureStore({
  reducer: {
    fetchedData: fetchedDataReducer,
  },
});

export default store;
