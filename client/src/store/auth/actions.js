// import { createAction } from "@reduxjs/toolkit";

// export const sendOtpRequest = createAction(SEND_OTP_REQUEST);

// // export const getProfileRequest = createAction(GET_PROFILE_REQUEST);

// // export const resendOtpRequest = createAction(RESEND_OTP_REQUEST);

// export const validateAndLoginRequest = createAction(VALIDATE_AND_LOGIN_REQUEST);

// export const logOutRequest = createAction(LOGOUT_REQUEST);

import { authActions } from "./auth-slice";
import {
  LoginOtpGenaration,
  LoginOtpVerification,
} from "../../services/authentication/index";

export const sendOtpRequest = (mobile) => {
  console.log("sendOtpRequest");
  return async (dispatch) => {
    const apiRequestHandler = async () => {
      const res = await LoginOtpGenaration(mobile);
      return res;
    };
    const res = await apiRequestHandler();

    dispatch(
      authActions.updateAuthState({
        hashedToken: res.data.hash,
        mobile: res.data.mobile,
      })
    );
  };
};

export const verifyOtpRequest = (mobile, hashedToken, otp) => {
  return async (dispatch) => {
    const apiRequestHandler = async () => {
      const res = await LoginOtpVerification(mobile, hashedToken, otp);
      return res;
    };
    const res = await apiRequestHandler();
    console.log(res.data.msg);
  };
};
