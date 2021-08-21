import { createSlice } from "@reduxjs/toolkit";
import { LoginOtpGenaration } from "../../services/authentication/index";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    hashedToken: "",
    otpGenerated: undefined,
    mobile: "",
  },
  reducers: {
    updateAuthState(state, action) {
      console.log(action.payload);
      state.hashedToken = action.payload.hashedToken;
      state.mobile = action.payload.mobile;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
