import React from "react";

import classes from "./PreviewCards.module.css";
import { Paper, Avatar, Typography, Stack } from "@mui/material";

const ProposalReplyPreview = ({ lawyerName, message, lawyerImage }) => {
    return (
        <Paper className={classes.container}>
            <Avatar
                alt="Image"
                variant="rounded"
                src={lawyerImage}
                className={classes.image}
            />
            <Stack className={classes.stack}>
                <Typography fontWeight={600}>{lawyerName}</Typography>
                <Typography
                    variant="subtitle3"
                    color="text.disabled"
                    // className={classes.replyMessage}
                >
                    {`${message.slice(0, 90)}...`}
                </Typography>
            </Stack>
        </Paper>
    );
};

export default ProposalReplyPreview;
