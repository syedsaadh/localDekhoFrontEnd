import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpRequest } from "../../store/auth/actions";
import "./Login.css";

const Otp = ({ mobile, onBack }) => {
  const [otp, setOtp] = useState("");
  const [isEditClicked, setIsEditClicked] = useState(false);
  const hashedToken = useSelector((state) => state.auth.hashedToken);
  console.log(hashedToken);
  const storedMobile = useSelector((state) => state.auth.mobile);
  console.log(storedMobile);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Verified");
    dispatch(verifyOtpRequest(mobile, hashedToken, otp));
    // setIsRequested(true);
  };

  const editIconHandler = () => {
    setIsEditClicked(true);
  };

  return (
    <div>
      <div className="title-group">OTP</div>
      <div className="title-group">Verification Code</div>
      <div className="title-group">We have sent the code verification to</div>
      <div className="edit-button">
        <div className="title-group">{mobile}</div>
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
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default Otp;
