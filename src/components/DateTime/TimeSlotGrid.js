import React from "react";

import { styled, Paper, Typography, Grid } from "@mui/material";

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
    flexGrow: "1",
    height: "40px",
    minWidth: "86px",
    borderRadius: "10px",
    ...(!active && {
        boxSizing: "border-box",
        border: "1px solid rgba(107, 119, 154, 0.1)",
    }),
    background: active ? "#282828" : "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const StyledGrid = styled(Grid)({
    width: "calc(100% + 18px)",
    maxHeight: "145px",
    overflow: "scroll",
    marginRight: "-10px",
    paddingRight: "10px",
});

const TimeSlotGrid = ({ timeSlots, value, onChange }) => {
    const clickHandler = (timeSlot) => onChange(timeSlot);

    return (
        <StyledGrid container spacing={1}>
            {timeSlots.map((timeSlot) => {
                const active = timeSlot === value;
                return (
                    <Grid item xs={4} sm={3} md={2} key={timeSlot}>
                        <StyledPaper
                            active={active}
                            onClick={() => clickHandler(timeSlot)}
                            elevation={0}
                        >
                            <Typography
                                variant="subtitle3"
                                color={active ? "#FFFFFF" : "#282828"}
                                lineHeight="1"
                            >
                                {timeSlot}
                            </Typography>
                        </StyledPaper>
                    </Grid>
                );
            })}
        </StyledGrid>
    );
};

export default TimeSlotGrid;
