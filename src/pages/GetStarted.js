import React, { useState } from "react";

import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputWithLabel from "../components/FormComponents/InputWithLabel";

const CountryCodeAdornment = styled((props) => <InputAdornment {...props} />)(
    ({ theme }) => ({
        "& .MuiTypography-root": {
            color: theme.palette.text.disabled,
            paddingLeft: "20px",
            marginRight: "-10px",
            fontSize: theme.typography.subtitle1.fontSize,
        },
    })
);

const GetStarted = ({ user = "client" }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+44");

    const changeHandler = (name, newVal) => {
        setPhoneNumber(newVal);
    };

    const bottomMessage =
        user === "client"
            ? "Are you a Lawyer? Get Started."
            : "Looking for a Lawyer? Get Started.";

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Add TitleBar */}
            <Typography
                variant="subtitle1"
                color="text.disabled"
                sx={{ px: "4vw", pt: "1vh" }}
                lineHeight="19px"
            >
                Enter you phone number to verify your account, and get all your
                legal services done here!
            </Typography>
            <Stack sx={{ pt: "5vh", px: "4vw", flexGrow: "1" }} spacing={4}>
                <InputWithLabel
                    name="phone"
                    label="Enter phone number"
                    value={phoneNumber}
                    onChange={changeHandler}
                    inputProps={{
                        startAdornment: (
                            <CountryCodeAdornment position="start">
                                {countryCode}
                            </CountryCodeAdornment>
                        ),
                    }}
                />
                <Button variant="contained">Continue</Button>
            </Stack>
            <Button sx={{ mb: "6vh" }} disableRipple>
                <Typography variant="subtitle2" textAlign="center">
                    {bottomMessage}
                </Typography>
            </Button>
        </Box>
    );
};

export default GetStarted;
