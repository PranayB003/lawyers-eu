import React, { useState } from "react";

import classes from "./Register.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputWithLabel from "../../../components/FormComponents/InputWithLabel";
import CheckWithLabel from "../../../components/FormComponents/CheckWithLabel";

const fields = [
    { name: "fullname", label: "Full Name", helperText: "Full Name" },
    { name: "email", label: "Email", helperText: "Email Address" },
];

const generateInitialState = () => {
    let initialState = {};
    fields.forEach((field) => {
        initialState[field.name] = "";
    });
    initialState["checkedTnC"] = false;
    return initialState;
};

const Register = () => {
    const [userData, setUserData] = useState(generateInitialState);

    const changeHandler = (name, newValue) => {
        setUserData((oldState) => {
            const newState = {
                ...oldState,
                [name]: newValue,
            };

            return newState;
        });
    };

    return (
        <Box className={classes.wrapperBox}>
            {/* Add TitleBar */}
            <Stack spacing={4} className={classes.inputStack}>
                {fields.map((field) => (
                    <InputWithLabel
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={userData[field.name]}
                        onChange={changeHandler}
                        helperText={field.helperText}
                    />
                ))}
                <CheckWithLabel
                    value="checkedTnC"
                    label={
                        <Typography variant="subtitle2">
                            I accept to the{" "}
                            <u className={classes.tnc}>Terms and Conditions</u>.
                        </Typography>
                    }
                    checked={userData["checkedTnC"]}
                    onChange={changeHandler}
                />
            </Stack>
            <Button variant="contained" className={classes.registerBtn}>
                Register
            </Button>
        </Box>
    );
};

export default Register;
