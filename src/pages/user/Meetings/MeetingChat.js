import React, { useEffect, useState } from "react";

import {
    Avatar,
    styled,
    Typography,
    Box,
    Stack,
    IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../resources/Union.svg";
import TitleBar from "../../../components/TitleBar/TitleBar";
import WrapperBox from "../../../components/WrapperBox";
import dummyLawyerImage from "../../../resources/Bitmap.jpg";
import ChatMessage from "../../../components/Messaging/ChatMessage";
import MessageInput from "../../../components/Messaging/MessageInput";
import { BsPlusCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

const FlexBox = styled((props) => <Box {...props} />)({
    display: "flex",
    alignItems: "center",
});

const MeetingChat = () => {
    const { meetingId } = useParams();
    const [chat, setChat] = useState([]);
    const [lawyerInfo, setLawyerInfo] = useState({ name: "", image: "" });

    // useEffect to get chat, lawyerName, lawyerImage
    useEffect(() => {
        setLawyerInfo({
            name: "Vivek Sharma",
            image: dummyLawyerImage,
        });
    }, [setLawyerInfo]);

    useEffect(() => {
        const timeNow = new Date();
        const newMessages = [
            {
                id: "01",
                from: "me",
                body: ["Hello Vivek, looking forward to our conversation"],
                time: {
                    date: timeNow.getDate(),
                    hour: timeNow.getHours(),
                    minute: timeNow.getMinutes(),
                },
                status: "recieved",
            },
            {
                id: "02",
                from: "lawyer",
                body: [
                    "Hello Sarang, I have gone through your case, I will discuss the details with you.",
                ],
                time: {
                    date: timeNow.getDate(),
                    hour: timeNow.getHours(),
                    minute: timeNow.getMinutes(),
                },
            },
            {
                id: "03",
                from: "me",
                body: ["Kab karega discuss bhai jldi bta", "Bta na bsdk"],
                time: {
                    date: timeNow.getDate(),
                    hour: timeNow.getHours(),
                    minute: timeNow.getMinutes(),
                },
                status: "sent",
            },
        ];

        setChat((prevChat) => [...prevChat, ...newMessages]);
    }, [setChat]);

    const messageSubmitHandler = (newMessage, time) => {
        setChat((prevChat) => {
            return [
                ...prevChat,
                {
                    id: time.toString(),
                    from: "me",
                    body: [newMessage],
                    time: {
                        date: time.getDate(),
                        hour: time.getHours(),
                        minute: time.getMinutes(),
                    },
                    status: "pending",
                },
            ];
        });
    };

    return (
        <WrapperBox height="97vh">
            <TitleBar Title="Chat" startIcon={<BackIcon />} />
            <FlexBox paddingBottom="20px">
                <Avatar
                    variant="circular"
                    alt={lawyerInfo.name}
                    src={lawyerInfo.image}
                />
                <Typography variant="h6" paddingLeft="15px">
                    {lawyerInfo.name}
                </Typography>
            </FlexBox>
            <Stack spacing={2} flexGrow={1} overflow="auto">
                {chat.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
            </Stack>
            <FlexBox padding="3px 0 10px" margin="0 -2vw -3vh">
                <IconButton size="large" edge="start">
                    <IconContext.Provider value={{ color: "#000000" }}>
                        <BsPlusCircle />
                    </IconContext.Provider>
                </IconButton>
                <MessageInput onSubmit={messageSubmitHandler} />
            </FlexBox>
        </WrapperBox>
    );
};

export default MeetingChat;
