import * as React from "react";
import { Button, Stack } from "@mui/material";
import "./OTPInput.css";
const OTPInputComponent = () => {
  const [state, setState] = React.useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    disable: true,
  });
  const handleChange = (value1, event) => {
    setState({ [value1]: event.target.value });
  };

  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    console.log(state);
    event.preventDefault();
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="TopDiv">
          <Stack direction="row" spacing={`12px`}>
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={state.otp1}
              // onKeyPress={keyPressed}
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={state.otp2}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={state.otp3}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={state.otp4}
              onChange={(e) => handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </Stack>
        </div>

        <Button
          variant="contained"
          //   onClick={() => onArrowClick("right")}
          className="SubmitBtn"
          fullWidth
        >
          <div className="BtnText">Verify</div>
        </Button>
      </form>
      <Stack
        justifyContent={`center`}
        alignItems={`center`}
        alignSelf={`center`}
      >
        <div className="BottomDiv">
          <Button disableElevation={true} disableFocusRipple={true} disableRipple={true} variant="outlined" className="ResendOTP">
            Resend OTP
          </Button>
        </div>
      </Stack>
    </>
  );
};
export default OTPInputComponent;
