import React from "react";

import { styled, Box, Typography } from "@mui/material";
import { BsCheck2, BsCheck2All, BsClock } from "react-icons/bs";
import { IconContext } from "react-icons";

const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "from",
})(({ from }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: from === "me" ? "flex-end" : "flex-start",
}));

const MessageBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "from",
})(({ from }) => ({
    maxWidth: "85%",
    padding: "15px",
    marginBottom: "5px",
    borderRadius: from === "me" ? "15px 15px 0px 15px" : "15px 15px 15px 0px",
    background: from === "me" ? "#000000" : "#F1F4F7",
}));

const TimeBox = styled(Box)({
    display: "flex",
    alignItems: "center",
});

const iconMap = {
    sent: {
        size: "1rem",
        icon: <BsCheck2 />,
    },
    recieved: {
        size: "1rem",
        icon: <BsCheck2All />,
    },
    pending: {
        size: "0.83rem",
        icon: <BsClock />,
    },
};

const ChatMessage = ({ message }) => {
    const { from, body, time, status } = message;

    return (
        <StyledBox from={from}>
            {body.map((message, index) => (
                <MessageBox key={index} from={from}>
                    <Typography color={from === "me" ? "#FFFFFF" : "#000000"}>
                        {message}
                    </Typography>
                </MessageBox>
            ))}
            <TimeBox>
                <Typography
                    variant="subtitle3"
                    color={from === "me" ? "#6B779A" : "#000000"}
                    paddingRight="5px"
                >
                    {`${time.hour}:${time.minute}`}
                </Typography>
                {from === "me" && (
                    <IconContext.Provider
                        value={{ size: iconMap[status].size }}
                    >
                        {iconMap[status].icon}
                    </IconContext.Provider>
                )}
            </TimeBox>
        </StyledBox>
    );
};

export default ChatMessage;
