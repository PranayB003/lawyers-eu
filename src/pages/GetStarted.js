/* global grecaptcha */
// Above comment is necessary for the global variable grecaptcha to be recognised.
import React, { useState, useEffect, useCallback } from "react";

import {
    Box,
    Button,
    InputAdornment,
    InputBase,
    Stack,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputWithLabel from "../components/FormComponents/InputWithLabel";
import WrapperBox from "../components/WrapperBox";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CountryCodeAdornment = styled((props) => <InputAdornment {...props} />)(
    ({ theme }) => ({
        marginLeft: "20px",
        // marginRight: "-10px",
        color: `${theme.palette.text.disabled} !important`,
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
        "& input": {
            paddingBlock: "10px",
            paddingLeft: "2px",
            width: "1.5rem",
            backgroundColor: "transparent",
            fontSize: theme.typography.subtitle2.fontSize,
            fontWeight: theme.typography.body2.fontWeight,
        },
    })
);

const checkValidity = (countryCode, phoneNumber) => {
    const phNumber = countryCode.trim() + phoneNumber.trim();
    const isInvalid =
        /\D+/.test(phNumber) ||
        countryCode.length < 1 ||
        phoneNumber.length < 10;
    return !isInvalid;
};

const GetStarted = ({ user = "client", auth }) => {
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("44");
    const [errorState, setErrorState] = useState(false);
    const [boxKey, setBoxKey] = useState(0);

    const changeHandler = (name, newVal) => {
        if (name === "phone") setPhoneNumber(newVal);
        else if (name === "countryCode") setCountryCode(newVal);
    };

    const onMobileSubmit = useCallback(() => {
        if (!checkValidity(countryCode, phoneNumber)) {
            setErrorState(true);
            return;
        }
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(
            auth,
            "+" + countryCode.trim() + phoneNumber.trim(),
            appVerifier
        )
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                navigate(`/otp?country=${countryCode}?phone=${phoneNumber}`);
                // setSearchParams({ country: countryCode, phone: phoneNumber });
            })
            .catch((error) => {
                console.error(error);
                if (
                    error.message ===
                    "Firebase: Invalid format. (auth/invalid-phone-number)."
                ) {
                    setErrorState(true);
                }
                window.recaptchaVerifier.render().then((widgetID) => {
                    grecaptcha.reset(widgetID);
                });
                setBoxKey((oldKey) => oldKey + 1);
            });
    }, [auth, countryCode, phoneNumber, navigate]);

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "continue-btn",
            { size: "invisible" },
            auth
        );

        return () => {
            window.recaptchaVerifier.clear();
        };
    }, [onMobileSubmit, auth]);

    const bottomMessage =
        user === "client"
            ? "Are you a Lawyer? Get Started."
            : "Looking for a Lawyer? Get Started.";

    return (
        <WrapperBox height="100vh">
            <Typography variant="h2" pt="6vh" pb="2vh">
                Get started.
            </Typography>
            <Typography
                variant="subtitle2"
                color="text.disabled"
                lineHeight="19px"
            >
                Enter you phone number to verify your account, and get all your
                legal services done here!
            </Typography>
            <Stack pt="5vh" flexGrow="1" spacing={4}>
                <InputWithLabel
                    formControlProps={{
                        error: errorState,
                    }}
                    name="phone"
                    label="Enter phone number"
                    value={phoneNumber}
                    onChange={changeHandler}
                    onFocus={() => setErrorState(false)}
                    inputProps={{
                        startAdornment: (
                            <CountryCodeAdornment position="start">
                                +
                                <InputBase
                                    type="tel"
                                    value={countryCode}
                                    onChange={(event) =>
                                        changeHandler(
                                            "countryCode",
                                            event.target.value
                                        )
                                    }
                                    inputProps={{
                                        maxLength: 2,
                                        type: "tel",
                                    }}
                                    placeholder="XX"
                                />
                            </CountryCodeAdornment>
                        ),
                        autoFocus: true,
                        inputProps: {
                            maxLength: 10,
                            type: "tel",
                        },
                        onFocus: () => setErrorState(false),
                    }}
                />
                <Box key={boxKey} id="btn-wrapper" width="100%">
                    <Button
                        id="continue-btn"
                        variant="contained"
                        fullWidth
                        onClick={onMobileSubmit}
                    >
                        Continue
                    </Button>
                </Box>
            </Stack>
            <Button sx={{ mb: "6vh" }} disableRipple>
                <Typography variant="button" textAlign="center">
                    {bottomMessage}
                </Typography>
            </Button>
        </WrapperBox>
    );
};

export default GetStarted;
