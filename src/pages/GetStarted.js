import React, { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import InputWithLabel from "../components/FormComponents/InputWithLabel";

const GetStarted = ({ user = "client" }) => {
    const [phoneNumber, setPhoneNumber] = useState(undefined);

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
                />
                <Button variant="contained">Continue</Button>
            </Stack>
            <Typography
                variant="subtitle2"
                sx={{ pb: "6vh" }}
                textAlign="center"
            >
                {bottomMessage}
            </Typography>
        </Box>
    );
};

export default GetStarted;
