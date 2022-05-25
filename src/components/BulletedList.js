import React from "react";

import { Typography, styled } from "@mui/material";

const StyledUL = styled((props) => <ul {...props} />)(({ theme }) => ({
    color: theme.palette.text.disabled,
    paddingInlineStart: "20px",
    margin: "0",
}));

const BulletedList = ({ listItems, typographyProps }) => {
    return (
        <StyledUL>
            {listItems.map((item, index) => (
                <li key={index}>
                    <Typography
                        variant="subtitle3"
                        color="text.disabled"
                        {...typographyProps}
                    >
                        {item}
                    </Typography>
                </li>
            ))}
        </StyledUL>
    );
};

export default BulletedList;
