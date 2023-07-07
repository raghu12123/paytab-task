import React, { useState } from "react";

import { toast } from "react-toastify";
import dynamic from "next/dynamic";

import { useDispatch } from "react-redux";

import { updateToken } from "@/redux/localtionSlice";
import { Form } from "react-bootstrap";

const SidebarModal = dynamic(() => import("./SidebarModal"), {
  ssr: false,
});

const LoginModal = (props: any) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const mobileNumberInputHandler = (e: any) => {
    setMobileNumber(e.target.value.slice(0, 10));
  };

  const otpInputHandler = (e: any) => {
    setOtp(e.target.value);
  };

  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const requestOtpFrom = async (event: any) => {
    event.preventDefault();

    if (mobileNumber.trim().length === 0) {
      return toast.error("Please enter a mobile number");
    }
    if (mobileNumber.length != 10) {
      return toast.error("invalid mobile number");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/login.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          mobile: `+91${mobileNumber}`,
        }),
      }
    );
    const data = await response.json();
    if (data.status) {
      setToken(data.token);
      setShowOtp(true);
      toast.success("Verification Sent To +91 " + mobileNumber);
    } else {
      toast.error(data.message);
    }
  };

  const verifyOtpForm = async (event: any) => {
    event.preventDefault();

    if (otp.trim().length == 0) {
      return toast.warn("Please Enter OTP");
    }

    let check={
      'status':200
    }

    const data = {
      'status':200
    }
    if (data.status) {
      props.toggleLoginSidebarModal();
      dispatch(updateToken(token));
      toast.success("Login Successfully");
      props.setToken(token);
      setShowOtp(false);
      setMobileNumber("");
    } else {
      toast.error("invalid otp");
    }
  };

  return (
    <>
      <SidebarModal
        toggleSidebar={props.toggleLoginSidebarModal}
        sidebarOpen={props.openLoginSidebarModel}
        heading={"Login"}
      >
        {!showOtp && (
          <>
            <form className="mt-4" onSubmit={requestOtpFrom}>
              <Form.Control
                value={mobileNumber}
                onChange={mobileNumberInputHandler}
               
                name={"mobile_number"}
              />

              <button type="submit" className="btn btn-primary">
                Request OTP
              </button>
            </form>
          </>
        )}

        {showOtp && (
          <>
            <form onSubmit={verifyOtpForm}>
              <div className="mb-3">
                Please enter the OTP sent to <br />{" "}
                <span style={{ fontWeight: 600 }}>{mobileNumber}</span>{" "}
                <span
                  className="text-primary ml-2"
                  style={{ cursor: "pointer", fontWeight: 600 }}
                  onClick={() => setShowOtp(false)}
                >
                  Change
                </span>
              </div>
              <Form.Control
                value={otp}
                onChange={otpInputHandler}
                name={"otp"}
                type={"number"}
              />
              <button type="submit" className="btn btn-primary">
                Verify
              </button>

              <div className="mt-3">
                Not received your code?{" "}
                <strong
                  className="text-primary"
                  onClick={requestOtpFrom}
                  style={{ cursor: "pointer" }}
                >
                  Resend code
                </strong>
              </div>
            </form>
          </>
        )}
      </SidebarModal>
    </>
  );
};

export default LoginModal;
