import type { AuthState } from "@/lib/redux/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  userToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserToken: (state, { payload }: { payload: string }) => {
      state.userToken = payload;
    },
    logOutUser: () => {
      localStorage.clear();
    },
  },
});

export const { updateUserToken } = authSlice.actions;

export default authSlice.reducer;
