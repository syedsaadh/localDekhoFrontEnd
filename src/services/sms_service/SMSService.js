import axios from "axios";
import chalk from "chalk";

const SendSMS = async (data) => {
  try {
    const apiKEY = process.env.REACT_APP_FAST2SMS_API_KEY;

    const uri = `https://www.fast2sms.com/dev/bulkV2`;

    await axios.get(
      uri,
      {
        params: {
          authorization: apiKEY,
          route: "q",
          message: data.Message,
          language: "english",
          flash: 0,
          numbers: data.To,
          sender_id: "FSTSMS",
        },
      },
      {
        "cache-control": "no-cache",
      }
    );
  } catch (error) {
    console.log(error.response);
    if (error.response.data.status_code === 412)
      console.log(
        chalk.red("Can't send message. Authorization key missing or invalid.")
      );

    if (error.response.data.status_code === 402)
      console.log(chalk.red("Can't send message. Message text is required."));

    if (error.response.data.status_code === 405)
      console.log(
        chalk.red("Can't send message.Atleast one Number is required.")
      );
  }
};

export const SendLoginOtpSMS = async (to, otp) => {
  try {
    const otpSMS = `Your LocalDekho verification OTP code is ${otp}. Code is valid for 10 minutes only, one time use. Please DO NOT share this OTP with anyone.`;

    await SendSMS({
      To: to,
      SMSId: to,
      Slug: "OTP-SMS",
      Priority: "high",
      Message: otpSMS,
    });

    return true;
  } catch (e) {
    throw e;
  }
};
