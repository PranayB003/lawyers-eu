import React, { useState } from "react";

import classes from "./LawyerRegister.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputWithLabel from "../../../components/FormComponents/InputWithLabel";
import CheckWithLabel from "../../../components/FormComponents/CheckWithLabel";
import DropDownWithLabel from "../../../components/FormComponents/DropDownWithLabel";

const fields = [
    {
        type: "shortText",
        name: "fullname",
        label: "Full Name",
        helperText: "Full Name",
    },
    {
        type: "shortText",
        name: "email",
        label: "Email",
        helperText: "Email Address",
    },
    {
        type: "shortText",
        name: "phone",
        label: "Phone",
        helperText: "Phone Number",
    },
    {
        type: "dropDown",
        name: "city",
        label: "City of Practice",
        helperText: "Please select your city",
    },
    {
        type: "dropDown",
        name: "area",
        label: "Practice areas",
        helperText: "Select your primary practice area",
    },
    {
        type: "dropDown",
        name: "otherAreas",
        label: "Other practice areas (select multiple)",
        helperText: "Select your practice areas",
    },
    { type: "longText", name: "message", label: "Message", helperText: "" },
];

const dummyDropDownOptions = ["Select", "Hello", "World"];

const generateInitialState = () => {
    let initialState = {};
    fields.forEach((field) => {
        initialState[field.name] = "";
    });
    initialState["checkedTnC"] = false;
    return initialState;
};

const LawyerRegister = () => {
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
                {fields.map((field) => {
                    if (field.type === "shortText") {
                        return (
                            <InputWithLabel
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                value={userData[field.name]}
                                onChange={changeHandler}
                                helperText={field.helperText}
                            />
                        );
                    } else if (field.type === "dropDown") {
                        return (
                            <DropDownWithLabel
                                name={field.name}
                                label={field.label}
                                key={field.name}
                                value={userData[field.name]}
                                // value={dummyDropDownOptions[0]}
                                onChange={changeHandler}
                                helperText={field.helperText}
                                options={dummyDropDownOptions}
                            />
                        );
                    } else if (field.type === "longText") {
                        return (
                            <InputWithLabel
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                value={userData[field.name]}
                                onChange={changeHandler}
                                helperText={field.helperText}
                                inputProps={{ multiline: true }}
                            />
                        );
                    }
                })}
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

export default LawyerRegister;
