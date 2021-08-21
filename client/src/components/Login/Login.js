import React, { useState, useCallback } from "react";
import "./Login.css";
import Otp from "./Otp";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpRequest } from "../../store/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const [mobile, setMobile] = useState(auth.mobile);
  const [isRequested, setIsRequested] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOtpRequest(mobile));
    setIsRequested(true);
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };
  // const handleChange = useCallback(
  //   (e) => {
  //     setMobile(e.target.value);
  //   },
  //   [mobile]
  // );

  const form = (
    <div>
      <div className="title-group">Login Account</div>
      <div className="title-group">Hello, welcome to your LocalDekho</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            value={mobile}
            type="tel"
            name="mobile"
            placeholder="123456789"
            size="10"
            pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
            onChange={handleChange}
            required
            // ref={enteredMobile}
          />
        </div>
        <button className="">Request OTP</button>
      </form>
    </div>
  );

  return <>{isRequested ? <Otp mobile={mobile} /> : form}</>;
};

export default React.memo(Login);
