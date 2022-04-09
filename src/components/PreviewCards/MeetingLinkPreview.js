import React from "react";

import classes from "./PreviewCards.module.css";
import { Paper, Avatar, Typography, Stack } from "@mui/material";

const MeetingLinkPreview = ({
    image,
    meetingLink = "https://providemeetinglinkhere.com",
}) => {
    return (
        <Paper className={classes.container}>
            <Avatar
                alt="Image"
                variant="rounded"
                src={image}
                className={classes.image}
            />
            <Stack className={classes.stack}>
                <Typography fontWeight={600} className={classes.question}>
                    Meeting Link
                </Typography>
                <Typography variant="subtitle3" className={classes.underline}>
                    <a
                        href={meetingLink}
                        target="_blank"
                        className={classes.meetingLink}
                    >
                        {meetingLink}
                    </a>
                </Typography>
            </Stack>
        </Paper>
    );
};

export default MeetingLinkPreview;
