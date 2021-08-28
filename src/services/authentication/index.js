// import { SendLoginOtpSMS, VerifyLoginOtp } from "../../middleware";
import axios from "axios";

export const LoginOtpGenaration = async (mobile) => {
  console.log("LoginOtpGenaration");
  try {
    const uri = "http://localhost:5000";
    const response = await axios.get(uri + `/sendOTP`, {
      params: {
        mobile: mobile,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const LoginOtpVerification = async (mobile, hashedToken, otp) => {
  console.log("LoginOtpVerification");
  try {
    const uri = "http://localhost:5000";
    const response = await axios.post(uri + `/verifyOTP`, {
      mobile: mobile,
      hash: hashedToken,
      otp: otp,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};
