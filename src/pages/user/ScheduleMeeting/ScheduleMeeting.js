import React, { useState } from "react";

import classes from "./ScheduleMeeting.module.css";
import { Box, Button, Stack } from "@mui/material";
import TitleBar from "./../../../components/TitleBar/TitleBar";
import { ReactComponent as BackIcon } from "../../../resources/Union.svg";
import InputWithLabel from "../../../components/FormComponents/InputWithLabel";
import MeetingPreview from "../../../components/PreviewCards/MeetingPreview";

const meetingDetailInputs = [
    { name: "name", label: "Full Name", helperText: "Full Name" },
    { name: "email", label: "Email", helperText: "Email Address" },
    { name: "phone", label: "Phone", helperText: "Phone Number" },
    {
        name: "company",
        label: "Company Name (optional)",
        helperText: "Company Name",
    },
    {
        name: "reason",
        label: "What is the reason for the appointment ?",
        helperText: "Explain your requirements / problem",
        inputProps: {
            multiline: true,
            minRows: 3,
        },
    },
];

const getInitialState = () => {
    let initialState = {};
    meetingDetailInputs.forEach((inputDetail) => {
        initialState = {
            ...initialState,
            [inputDetail.name]: "",
        };
    });
    return initialState;
};

const ScheduleMeeting = ({ lawyerImage, lawyerName, date, time, cost }) => {
    const [meetingDetails, setMeetingDetails] = useState(getInitialState);

    const detailChangeHandler = (detailName, newValue) => {
        setMeetingDetails((prevState) => ({
            ...prevState,
            [detailName]: newValue,
        }));
    };

    return (
        <Box className={classes.wrapperBox}>
            <TitleBar Title="Enter Details" startIcon={<BackIcon />} />
            <MeetingPreview
                lawyerImage={lawyerImage}
                lawyerName={lawyerName}
                date={date}
                time={time}
                cost={cost}
            />
            <Stack spacing={4} className={classes.inputStack}>
                {meetingDetailInputs.map((inputDetail) => (
                    <InputWithLabel
                        key={inputDetail.name}
                        name={inputDetail.name}
                        label={inputDetail.label}
                        value={meetingDetails[inputDetail.name]}
                        onChange={detailChangeHandler}
                        helperText={inputDetail.helperText}
                        inputProps={inputDetail.inputProps}
                    />
                ))}
                <Button variant="contained" fullWidth>
                    Confirm Meeting
                </Button>
            </Stack>
        </Box>
    );
};

export default ScheduleMeeting;
