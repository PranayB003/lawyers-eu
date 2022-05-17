import React, { useState } from "react";

import { Box, Typography, Stack, Button } from "@mui/material";
import classes from "./TitleBar.module.css";

const SelectServices = (props) => {
  return (
    <Box className={classes.box1}>
      <Stack className={classes.ButtonStart} direction="row">
        <Button endIcon={props.startIcon}></Button>
      {props.SideTitle!==undefined ? <Typography className={classes.SideTitle} >{props.SideTitle}</Typography> : null}
      </Stack>

      <Typography
        variant={props.CSSTitle !== undefined ? props.CSSTitle : "caption"}
      >
        {props.Title}
      </Typography>
      <Stack className={classes.ButtonEnd} direction="row" spacing={`2px`}>
        <Button endIcon={props.endIcon}></Button>
        {props.secondEndIcon!==undefined&&<Button endIcon={props.secondEndIcon}></Button>}
      </Stack>
    </Box>
  );
};

export default SelectServices;
