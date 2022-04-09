import React from "react";

import { Chip, Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled((props) => <NavLink {...props} />)({
    textDecoration: "none",
});

const StyledChip = styled((props) => <Chip {...props} />)({
    padding: "20px 10px",
    fontWeight: "700",
    "&.MuiChip-outlined": {
        border: "none",
    },
    "&.MuiChip-filled": {
        boxShadow:
            "0px 0px 10px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "30px",
    },
    textDecoration: "none",
});

const forumChipLinkDetails = [
    { label: "Latest", to: "latest" },
    { label: "Top", to: "top" },
    { label: "Ask New", to: "new" },
];

const meetingChipLinkDetails = [
    { label: "Links", to: "links" },
    { label: "Chat", to: "chat" },
    { label: "Cancel", to: "cancel" },
];

const getLinkDetails = (type) => {
    if (type === "forum") return forumChipLinkDetails;
    else if (type === "meeting") return meetingChipLinkDetails;
};

const NavChips = ({ type = "forum" || "meeting" }) => {
    const chipLinkDetails = getLinkDetails(type);

    return (
        <Stack spacing={3} direction="row">
            {chipLinkDetails.map((chipLink) => (
                <StyledNavLink key={chipLink.label} to={`./../${chipLink.to}`}>
                    {({ isActive }) => (
                        <StyledChip
                            variant={isActive ? "filled" : "outlined"}
                            color={isActive ? "primary" : "default"}
                            label={chipLink.label}
                        />
                    )}
                </StyledNavLink>
            ))}
        </Stack>
    );
};

export default NavChips;
