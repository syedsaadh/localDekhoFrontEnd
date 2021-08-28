import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";
// import { LoginOtpGenaration } from "../../services/authentication/index";
import { actionFailed, actionRequest, actionSuccess } from "../helper";
import { notification } from "antd";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    loading: false,
    hashedToken: "",
    otpGenerated: undefined,
    mobile: "",
  },
  reducers: {
    [actionRequest(actions.SEND_OTP)]: (state, action) => {
      state.loading = true;
      state.hashedToken = "";
    },
    [actionSuccess(actions.SEND_OTP)]: (state, action) => {
      state.hashedToken = action.payload.hash;
      state.mobile = action.payload.mobile;
      state.loading = false;
    },
    [actionFailed(actions.SEND_OTP)]: (state, action) => {
      state.loading = false;
      notification.error({ message: "Error in sending OTP!" });
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
