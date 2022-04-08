import React, { useState } from "react";

import { styled, Typography, Box, Stack, Button } from "@mui/material";
import TitleBar from "../../components/TitleBar/TitleBar";
import { ReactComponent as SettingsIcon } from "../../resources/Icon.svg";
import { ReactComponent as BackIcon } from "../../resources/Union.svg";
import DropDownWithLabel from "../../components/FormComponents/DropDownWithLabel";
import InputWithLabel from "../../components/FormComponents/InputWithLabel";

const questionInputDetails = [
    {
        name: "question",
        label: "Question",
        helperText: "What is your question?",
    },
    {
        name: "details",
        label: "Details",
        helperText:
            "Explain your problem, this will enable lawyersto give better solutions",
        inputProps: {
            multiline: true,
            minRows: 5,
        },
    },
    {
        name: "category",
        label: "Category",
        helperText: "Select your primary practice area",
        type: "dropdown",
    },
    {
        name: "name",
        label: "Full Name",
        helperText: "Full Name",
    },
    {
        name: "email",
        label: "Email",
        helperText: "Email Address",
    },
    {
        name: "phone",
        label: "Phone",
        helperText: "Phone Number",
    },
    {
        name: "city",
        label: "City",
        helperText: "Select City",
        type: "dropdown",
    },
];

const getInitialState = () => {
    let initialState = {};
    questionInputDetails.forEach((questionInput) => {
        initialState = {
            ...initialState,
            [questionInput.name]: "",
        };
    });
    return initialState;
};

const WrapperBox = styled((props) => <Box {...props} />)(({ theme }) => ({
    padding: "0 6vw 3vh",
    display: "flex",
    flexDirection: "column",
}));

const RequestProposal = () => {
    const [questionDetails, setQuestionDetails] = useState(getInitialState);

    const inputChangeHandler = (name, newValue) => {
        setQuestionDetails((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const categoryOptions = ["Criminal Law", "Copyright Law", "IT Law"];

    return (
        <WrapperBox>
            <TitleBar
                Title="Request Proposal"
                endIcon={<SettingsIcon />}
                startIcon={<BackIcon />}
            />
            <Typography color="text.disabled">
                Tell us your requirements and get proposals directly to your
                inbox.
            </Typography>
            <Stack spacing={4} sx={{ my: "4vh" }}>
                {questionInputDetails.map((input) => {
                    const commonProps = {
                        key: input.name,
                        name: input.name,
                        label: input.label,
                        value: questionDetails[input.name],
                        onChange: inputChangeHandler,
                        helperText: input.helperText,
                    };

                    if (input.type === "dropdown")
                        return (
                            <DropDownWithLabel
                                {...commonProps}
                                options={categoryOptions}
                            />
                        );
                    else
                        return (
                            <InputWithLabel
                                {...commonProps}
                                inputProps={input.inputProps}
                            />
                        );
                })}
            </Stack>
            <Button variant="contained" fullWidth>
                Request Proposals
            </Button>
        </WrapperBox>
    );
};

export default RequestProposal;
