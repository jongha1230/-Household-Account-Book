import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../../fetchData";

export const loadFetchedData = createAsyncThunk(
  "fetchedData/loadFetchedData",
  async () => {
    const fetchedData = await fetchData();
    const localData = JSON.parse(localStorage.getItem("dataItem")) || [];
    const combinedData = [
      ...fetchedData.filter(
        (item) => !localData.some((localItem) => localItem.id === item.id)
      ),
      ...localData,
    ];

    localStorage.setItem("dataItem", JSON.stringify(combinedData));
    return combinedData;
  }
);

const fetchedDataSlice = createSlice({
  name: "fetchedData",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("dataItem", JSON.stringify(state));
    },
    updateExpense: (state, action) => {
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("dataItem", JSON.stringify(state));
      }
    },
    removeExpense: (state, action) => {
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("dataItem", JSON.stringify(state));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFetchedData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addExpense, updateExpense, removeExpense } =
  fetchedDataSlice.actions;

export default fetchedDataSlice.reducer;
