import type { DialogState } from "@/lib/redux/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogState = {
  isPayNowOpen: false,
  isTransferOpen: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openPayNow: state => {
      state.isPayNowOpen = true;
    },
    closePayNow: state => {
      state.isPayNowOpen = false;
    },
    openTransfer: state => {
      state.isTransferOpen = true;
    },
    closeTransfer: state => {
      state.isTransferOpen = false;
    },
  },
});

export const { openPayNow, closePayNow, openTransfer, closeTransfer } = dialogSlice.actions;

export default dialogSlice.reducer;
