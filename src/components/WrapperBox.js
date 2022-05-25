import React from "react";
import { styled, Box } from "@mui/material";

const WrapperBox = styled((props) => <Box {...props} />)(({ theme }) => ({
    padding: "0 6vw 3vh",
    display: "flex",
    flexDirection: "column",
}));

export default WrapperBox;
