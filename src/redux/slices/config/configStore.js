import { configureStore } from "@reduxjs/toolkit";
import fetchedDataReducer from "../fetchedDataSlice";

const store = configureStore({
  reducer: {
    fetchedData: fetchedDataReducer,
  },
});

export default store;
