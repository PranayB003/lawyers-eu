import React from "react";

import classes from "./PreviewCards.module.css";
import {
    Avatar,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { FiEdit } from "react-icons/fi";
import dummyImage from "./../../resources/dummyMeetingInfo.png";
import { Box } from "@mui/system";

const MeetingPreview = ({
    lawyerImage = dummyImage,
    lawyerName = "Vivek Sharma",
    date = "TUE, 14 July 2022",
    time = "12:30 PM",
    cost = "40",
    enableEdit = true,
}) => {
    return (
        <Paper className={classes.container}>
            <Avatar
                alt="Image"
                variant="rounded"
                src={lawyerImage}
                className={classes.image}
            />
            <Stack className={classes.stack}>
                <Box className={classes.stackBox}>
                    <Typography
                        fontWeight={600}
                    >{`Meeting With ${lawyerName}`}</Typography>
                    {enableEdit && (
                        <IconButton size="small" disableRipple>
                            <FiEdit />
                        </IconButton>
                    )}
                </Box>
                <Box className={`${classes.stackBox} ${classes.verticalDense}`}>
                    <Typography variant="subtitle3">Date and Time</Typography>
                    <Typography
                        variant="overline"
                        color="text.disabled"
                        textAlign="right"
                    >{`${date} | ${time}`}</Typography>
                </Box>
                <Box className={`${classes.stackBox} ${classes.verticalDense}`}>
                    <Typography variant="subtitle3">
                        Consultation Charge
                    </Typography>
                    <Typography
                        variant="overline"
                        color="text.disabled"
                        textAlign="right"
                    >{`$${cost}/hr`}</Typography>
                </Box>
            </Stack>
        </Paper>
    );
};

export default MeetingPreview;
