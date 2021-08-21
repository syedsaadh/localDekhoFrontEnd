import { SendLoginOtpSMS, VerifyLoginOtp } from "../../middleware";

export const LoginOtpGenaration = async (mobile) => {
  console.log("LoginOtpGenaration");
  const response = await SendLoginOtpSMS(mobile);

  return response;
};

export const LoginOtpVerification = async (mobile, hashedToken, otp) => {
  console.log("LoginOtpVerification");
  const response = await VerifyLoginOtp(mobile, hashedToken, otp);

  return response;
};
