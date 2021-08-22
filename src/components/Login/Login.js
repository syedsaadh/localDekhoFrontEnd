import React, { useEffect, useState } from "react";
import "./Login.css";
import Otp from "./Otp";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpRequest } from "../../store/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const [mobile, setMobile] = useState(auth.mobile);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    if (auth.hashedToken) {
      setIsRequested(true);
    }
  }, [auth.hashedToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOtpRequest(mobile));
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  const form = (
    <div>
      <div className="title-group">Login Account</div>
      <div className="title-group">Hello, welcome to your LocalDekho</div>
      <form className="form">
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
          />
        </div>
        <Button type="primary" onClick={handleSubmit} loading={auth.loading}>
          Request OTP
        </Button>
      </form>
    </div>
  );

  return (
    <>
      {isRequested ? (
        <Otp
          onBack={() => {
            setIsRequested(false);
          }}
          mobile={mobile}
        />
      ) : (
        form
      )}
    </>
  );
};

export default Login;
