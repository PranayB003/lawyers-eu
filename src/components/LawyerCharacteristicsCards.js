import React from "react";

import { Paper, Stack, styled, Typography } from "@mui/material";
import { FiAward, FiDollarSign, FiStar } from "react-icons/fi";

const ContainerStack = styled((props) => <Stack direction="row" {...props} />)({
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "380px",
    alignSelf: "center",
});

const StyledPaper = styled((props) => <Paper {...props} />)({
    boxShadow: "0px 10px 25px rgba(107, 119, 154, 0.07)",
    borderRadius: "21px",
    width: "30%",
    maxWidth: "100px",
    aspectRatio: "5/6",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
});

const TopAdornment = styled((props) => <div {...props} />)({
    background: "#F2F2F2",
    borderRadius: "0px 0px 15px 15px",
    height: "50%",
    width: "45%",
    minWidth: "44px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: "1.5rem",
});

const LawyerCharacteristicsCards = ({ experience, cost, rating }) => {
    return (
        <ContainerStack>
            <StyledPaper>
                <TopAdornment>
                    <FiAward />
                </TopAdornment>
                <Typography variant="subtitle3" color="#222B45">
                    {`${experience} Years`}
                </Typography>
                <Typography fontSize="0.5625rem" color="#6B779A">
                    Experience
                </Typography>
            </StyledPaper>
            <StyledPaper>
                <TopAdornment>
                    <FiDollarSign />
                </TopAdornment>
                <Typography
                    variant="subtitle3"
                    color="#222B45"
                >{`$${cost}/hr`}</Typography>
                <Typography fontSize="0.5625rem" color="#6B779A">
                    Charge
                </Typography>
            </StyledPaper>
            <StyledPaper>
                <TopAdornment>
                    <FiStar />
                </TopAdornment>
                <Typography variant="subtitle3" color="#222B45">
                    {rating}
                </Typography>
                <Typography fontSize="0.5625rem" color="#6B779A">
                    Rating
                </Typography>
            </StyledPaper>
        </ContainerStack>
    );
};

export default LawyerCharacteristicsCards;
