import React from "react";

import classes from "./PreviewCards.module.css";
import { Paper, Avatar, Typography, Stack } from "@mui/material";

const ProposalPreview = ({
    question = "Random question testing testing testing testing testing",
    image,
    numberOfAnswers = "13",
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
                    {question}
                </Typography>
                <Typography variant="subtitle3" fontWeight={500}>
                    Proposal -{" "}
                    <Typography
                        variant="subtitle3"
                        className={classes.underline}
                    >{`${numberOfAnswers} proposals`}</Typography>
                </Typography>
            </Stack>
        </Paper>
    );
};

export default ProposalPreview;
