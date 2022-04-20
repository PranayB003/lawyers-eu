import React, { useEffect, useRef } from "react";

import { Paper, styled, Typography } from "@mui/material";

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
    borderRadius: "13px",
    background: active ? "#282828" : "#FFFFFF",
    ...(!active && {
        border: "1px solid rgba(107, 119, 154, 0.1)",
        boxSizing: "border-box",
    }),
    height: "70px",
    minWidth: "65px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
}));

const DateCard = ({ date, day, active = false, onClick }) => {
    const cardRef = useRef();

    useEffect(() => {
        if (active)
            cardRef.current.scrollIntoView({
                behaviour: "smooth",
                inline: "nearest",
                block: "nearest",
            });
    }, [active, cardRef]);

    return (
        <StyledPaper
            elevation={0}
            active={active}
            onClick={onClick}
            ref={cardRef}
        >
            <Typography variant="h6" color={active ? "#FFFFFF" : "#282828"}>
                {date}
            </Typography>
            <Typography
                variant="overline"
                lineHeight="1.2"
                color={active ? "#FFFFFF" : "#282828"}
            >
                {day}
            </Typography>
        </StyledPaper>
    );
};

export default DateCard;
