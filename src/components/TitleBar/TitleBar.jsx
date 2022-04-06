import React, { useState } from "react";

import { Box, Typography, Stack, Button } from "@mui/material";
import classes from "./TitleBar.module.css";

const SelectServices = (props) => {
  return (
      <Box className={classes.box1}>
        <Stack className={classes.ButtonStart}>
          <Button endIcon={props.startIcon}></Button>
        </Stack>

        <Typography variant="caption">{props.Title}</Typography>
        <Stack className={classes.ButtonEnd}>
          <Button endIcon={props.endIcon}></Button>
        </Stack>
      </Box>
  );
};

export default SelectServices;
