import React from "react";

import { styled, Box, Stack, Chip, Typography } from "@mui/material";
import TitleBar from "../../components/TitleBar/TitleBar";
import { ReactComponent as BackIcon } from "../../resources/Union.svg";
import ProposalReplyPreview from "../../components/PreviewCards/ProposalReplyPreview";

const WrapperBox = styled((props) => <Box {...props} />)(({ theme }) => ({
    padding: "0 6vw 3vh",
    display: "flex",
    flexDirection: "column",
}));

const ChipStack = styled((props) => (
    <Stack spacing={1} direction="row" {...props} />
))({
    flexWrap: "wrap",
    rowGap: "5px",
});

const ViewProposal = () => {
    const proposalRequestDetails = {
        categories: ["Intellectual Property Laws (IPR)"],
        question:
            "I have a small question can a christian spinster woman demand for father's ancestor",
        details:
            "I have a small query can a Christian spinster women demand for father's ancestors property while he is alive and dwelling in the same premises (more than one property all inheritance belonging to ancestors property located in Mumbai Maharashtra India) also the parents have legally divorced and daughters living separately. Kindly message me on 9821207448 thanks in advance🙏🏻",
        proposals: [
            {
                lawyerName: "Vivek Sharma",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet risus vulputate, vehicula elit quis, iaculis dui. Donec dignissim orci in massa consequat, at euismod ipsum pellentesque.",
            },
            {
                lawyerName: "Vivek Sharma",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet risus vulputate, vehicula elit quis, iaculis dui. Donec dignissim orci in massa consequat, at euismod ipsum pellentesque.",
            },
            {
                lawyerName: "Vivek Sharma",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet risus vulputate, vehicula elit quis, iaculis dui. Donec dignissim orci in massa consequat, at euismod ipsum pellentesque.",
            },
        ],
    };

    return (
        <WrapperBox>
            <TitleBar Title="Proposals" startIcon={<BackIcon />} />
            <Stack spacing={2} sx={{ mt: "3vh" }}>
                <ChipStack spacing={1} direction="row">
                    {proposalRequestDetails.categories.map((category) => (
                        <Chip
                            key={category}
                            variant="outlined"
                            label={category}
                        />
                    ))}
                </ChipStack>
                <Typography variant="h6">
                    {proposalRequestDetails.question}
                </Typography>
                <Typography color="text.disabled" variant="subtitle3">
                    {proposalRequestDetails.details}
                </Typography>
            </Stack>
            <Stack spacing={2} sx={{ mt: "4vh" }}>
                <Typography variant="h6">Proposals</Typography>
                {proposalRequestDetails.proposals.map((proposal, index) => (
                    <ProposalReplyPreview
                        key={`${proposal.lawyerName}${index}`}
                        lawyerName={proposal.lawyerName}
                        message={proposal.message}
                    />
                ))}
            </Stack>
        </WrapperBox>
    );
};

export default ViewProposal;
