import type { DialogState } from "@/lib/redux/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogState = {
  isPayNowOpen: false,
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
  },
});

export const { openPayNow, closePayNow } = dialogSlice.actions;

export default dialogSlice.reducer;
