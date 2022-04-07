import React from "react";

import classes from "./MiniMeetingInfo.module.css";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import dummyImage from "./../../resources/dummyMeetingInfo.png";

const MiniMeetingInfo = ({
    lawyerImage = dummyImage,
    lawyerName = "Vivek Sharma",
    date = "TUE, 14 July 2022",
    time = "12:30 PM",
    cost = "40",
}) => {
    return (
        <Paper className={classes.container}>
            <Avatar
                alt="Image"
                variant="rounded"
                src={lawyerImage}
                className={classes.image}
            />
            <Grid container>
                <Grid item sm={6} className={classes.gridItems}>
                    <Typography
                        fontWeight={600}
                    >{`Meeting With ${lawyerName}`}</Typography>
                </Grid>
                <Grid
                    item
                    sm={6}
                    className={`${classes.gridItems} ${classes.right}`}
                >
                    <IconButton size="small" disableRipple>
                        <FiEdit />
                    </IconButton>
                </Grid>
                <Grid item sm={6} className={classes.gridItems}>
                    <Typography variant="subtitle3">Date and Time</Typography>
                </Grid>
                <Grid
                    item
                    sm={6}
                    className={`${classes.gridItems} ${classes.right}`}
                >
                    <Typography
                        variant="overline"
                        color="text.disabled"
                        textAlign="right"
                    >{`${date} | ${time}`}</Typography>
                </Grid>
                <Grid item sm={6} className={classes.gridItems}>
                    <Typography variant="subtitle3">
                        Consultation Charge
                    </Typography>
                </Grid>
                <Grid
                    item
                    sm={6}
                    className={`${classes.gridItems} ${classes.right}`}
                >
                    <Typography
                        variant="overline"
                        color="text.disabled"
                        textAlign="right"
                    >{`$${cost}/hr`}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default MiniMeetingInfo;
