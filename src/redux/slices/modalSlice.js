import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConfirmModalOpen: false,
  isAlertModalOpen: false,
  alertMessage: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openConfirmModal: (state) => {
      state.isConfirmModalOpen = true;
    },
    closeConfirmModal: (state) => {
      state.isConfirmModalOpen = false;
    },
    openAlertModal: (state, action) => {
      state.isAlertModalOpen = true;
      state.alertMessage = action.payload;
    },
    closeAlertModal: (state) => {
      state.isAlertModalOpen = false;
      state.alertMessage = "";
    },
  },
});

export const {
  openConfirmModal,
  closeConfirmModal,
  openAlertModal,
  closeAlertModal,
} = modalSlice.actions;

export default modalSlice.reducer;
