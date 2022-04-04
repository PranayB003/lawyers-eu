import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MyStyles from "./OTPPage.module.css";
import OTPInputComponent from "../../../components/FormComponents/OTPInput/OTPInput";
import { ListItem as Item } from "@mui/material";
const OTPPage = () => {
  return (
    <Box sx={{ width: "100%" }} className={MyStyles.Box}>
      <Stack spacing={`-13px`}>
        <Item className={MyStyles.orange}>Verify Your Mobile Number</Item>

        <Item className={MyStyles.SubHeading}>
          Enter the 4 digit OTP sent to your mobile number{"   "}
          <br />
        </Item>
        <Item className={MyStyles.SubHeading1}>
          <b>+44-7362242874 </b>
        </Item>
        <Item className={MyStyles.MakeCenter} >
          <OTPInputComponent />
        </Item>
      </Stack>
    </Box>
  );
};
export default OTPPage;
