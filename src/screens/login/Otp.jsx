import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpRequest } from "../../store/auth/actions";
import "./login.css";

const Otp = ({ mobile, onBack }) => {
  const [otp, setOtp] = useState("");
  const hashedToken = useSelector((state) => state.auth.hashedToken);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyOtpRequest(mobile, hashedToken, otp));
    // setIsRequested(true);
  };

  return (
    <div className="login_body">
      <div className="login__root">
        <div className="title-group__header">OTP</div>
        <div className="title-grpup_otp_header">Verification Code</div>
        <div className="title-group_otp_info">
          We have sent the code verification to
        </div>
        <div className="edit-button">
          <div className="title-group_mobile">{mobile}</div>
          <div onClick={onBack}>
            <EditIcon />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              value={otp}
              type="tel"
              name="otp"
              size="6"
              onChange={handleChange}
              required
              // ref={enteredOtp}
            />
          </div>
          <div className="button__head">
            <button className="">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
