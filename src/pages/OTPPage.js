import React, { useState } from "react";

import { Typography, Stack, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import WrapperBox from "../components/WrapperBox";
import OTPInput from "../components/FormComponents/OTPInput";

const OTPPage = () => {
    const [otp, setOTP] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const countryCode = searchParams.get("countryCode");
    const phoneNumber = searchParams.get("phone");

    const otpValueHandler = (otpValue) => {
        setOTP(otpValue);
    };

    const verifyHandler = () => {
        console.log("Checking verification code");
        window.confirmationResult
            .confirm(otp)
            .then((result) => {
                const user = result.user;
                console.log(user);

                user.getIdToken()
                    .then((idToken) => {
                        console.log(idToken);
                    })
                    .catch((error) => {
                        console.log("couldn't get id token");
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.log("couldn't verify otp");
                console.log(error);
            });
    };

    return (
        <WrapperBox height="100vh">
            <Typography variant="h2" pt="6vh" pb="2vh">
                Verify Your Mobile Number
            </Typography>
            <Typography
                variant="subtitle2"
                color="text.disabled"
                lineHeight="19px"
            >
                Enter the 6 digit OTP sent to your mobile number
                <br />
                <b>{`+${countryCode} ${phoneNumber}`}</b>
            </Typography>
            <Stack spacing={4} pt="7vh" flexGrow="1">
                <OTPInput inputSize={6} getValue={otpValueHandler} />
                <Button
                    variant="contained"
                    fullWidth
                    disabled={otp.length < 6}
                    onClick={verifyHandler}
                >
                    Verify
                </Button>
            </Stack>
            <Button sx={{ mb: "6vh" }} disableRipple>
                <Typography variant="button" textAlign="center">
                    Resend OTP
                </Typography>
            </Button>
        </WrapperBox>
    );
};
export default OTPPage;
