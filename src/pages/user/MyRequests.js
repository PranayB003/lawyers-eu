import React from "react";

import { styled, Typography, Box, Stack, Button } from "@mui/material";
import TitleBar from "../../components/TitleBar/TitleBar";
import { ReactComponent as BackIcon } from "../../resources/Union.svg";
import MeetingPreview from "../../components/PreviewCards/MeetingPreview";
import ForumQuestionPreview from "../../components/PreviewCards/ForumQuestionPreview";
import ProposalRequestPreview from "../../components/PreviewCards/ProposalRequestPreview";

const WrapperBox = styled((props) => <Box {...props} />)(({ theme }) => ({
    padding: "0 6vw 3vh",
    display: "flex",
    flexDirection: "column",
}));

const MyRequests = () => {
    const myRequests = [
        { type: "meeting" },
        { type: "question-forum" },
        { type: "question-proposal" },
    ];

    return (
        <WrapperBox>
            <TitleBar Title="My Requests" startIcon={<BackIcon />} />
            <Stack spacing={2} sx={{ my: "3vh" }}>
                {myRequests.map((request, index) => {
                    if (request.type === "meeting")
                        return (
                            <MeetingPreview
                                key={`${request.type}${index}`}
                                enableEdit={false}
                            />
                        );
                    else if (request.type === "question-forum")
                        return (
                            <ForumQuestionPreview
                                key={`${request.type}${index}`}
                            />
                        );
                    else if (request.type === "question-proposal")
                        return (
                            <ProposalRequestPreview
                                key={`${request.type}${index}`}
                            />
                        );
                })}
            </Stack>
        </WrapperBox>
    );
};

export default MyRequests;
