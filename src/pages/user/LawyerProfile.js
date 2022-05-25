import React, { useState } from "react";

import { useParams } from "react-router-dom";
import {
    Avatar,
    styled,
    Typography,
    Stack,
    Button,
    Collapse,
} from "@mui/material";
import { ReactComponent as BackIcon } from "../../resources/Union.svg";
import { ReactComponent as MoreIcon } from "../../resources/Ellipsis.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import WrapperBox from "../../components/WrapperBox";
import dummyImage from "../../resources/vivek.png";
import BulletedList from "../../components/BulletedList";
import LawyerCharacteristicsCards from "../../components/LawyerCharacteristicsCards";
import DatePicker from "../../components/DateTime/DatePicker";
import TimeSlotGrid from "../../components/DateTime/TimeSlotGrid";

const BioStack = styled((props) => <Stack spacing={2} {...props} />)({
    alignItems: "center",
    marginBottom: "3vh",
});

const StyledAvatar = styled((props) => (
    <Avatar variant="circular" {...props} />
))({
    height: "88px",
    width: "88px",
    background:
        "linear-gradient(180deg, rgba(151,151,151,1) 0%, rgba(255,255,255,1) 100%)",
    boxShadow: "0px 15px 30px rgba(230, 217, 217, 1)",
    "& .MuiAvatar-img": {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        overflow: "hidden",
    },
});

const SubHeading = styled((props) => <Typography variant="h6" {...props} />)({
    marginTop: "3vh",
    marginBottom: "2vh",
});

const OutlinedButton = styled((props) => (
    <Button fullWidth variant="outlined" {...props} />
))(({ theme }) => ({
    // marginTop: "2vh",
    fontSize: theme.typography.subtitle3.fontSize,
    fontWeight: "500",
    lineHeight: "2",
}));

const LawyerProfile = () => {
    const { lawyerId } = useParams();

    const [expanded, setExpanded] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState(null);
    const [appointmentTime, setAppointmentTime] = useState(null);

    const expandHandler = () => {
        setAppointmentDate(new Date());
        setExpanded(true);
    };
    const dateChangeHandler = (newDate) => setAppointmentDate(newDate);
    const timeChangeHandler = (newTime) => setAppointmentTime(newTime);

    // useEffect to get lawyerDetails
    const lawyerDetails = {
        image: "",
        name: "Vivek Sharma",
        expertise:
            "Copyright law, IT law, Patent , Trademark, Entertainment law",
        about: "Dispute resolution expert: specialize in resolving disputes through mediation, arbitration or litigation. In the quickest possible and cost effective manner. have extensive international and domestic experience in handling cross-border transactions, commercial, construction, intellectual property, corporate,family related personal property and business disputes. I am often appointed as an Arbitrator, Mediator, expert in recovery of damages and intellectual property matters.",
        cost: 40,
        rating: 4.5,
        experience: 8,
        availableTimeSlots: [
            "09:00 AM",
            "09:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
            "01:00 PM",
            "01:30 PM",
            "02:00 PM",
        ],
        practiceAreas: [
            "Bar Council of India",
            "Bar Council of Delhi",
            "Tis Hazari Bar Association",
        ],
        awards: ["DIPLOMA IN INTERNATIONAL TRADE & COMMERCE"],
        clients: [
            "North INDIA DISTRIBUTORS PVT. LTD",
            "K.K. DRESSES & COMPANY",
            "LALA GHANSHYAMDASS AND SONS",
            "YOGI INTERNATIONAL",
            "BHARTI SYNTHETICS",
            "BALAJI GARMENTS",
            "R.C.CHADDA & CO.",
        ],
        address: [
            "HB Twin Towers, 7th Floor, Netaji Subhash Place, 110034,Delhi",
        ],
    };

    return (
        <WrapperBox>
            <TitleBar
                Title="Lawyer Profile"
                startIcon={<BackIcon />}
                endIcon={<MoreIcon />}
            />
            <BioStack>
                <StyledAvatar
                    alt="Profile Picture"
                    src={lawyerDetails.image || dummyImage}
                />
                <Typography variant="h6">{lawyerDetails.name}</Typography>
                <Typography
                    variant="subtitle3"
                    color="text.disabled"
                    textAlign="center"
                    maxWidth="70%"
                >
                    {`Expert in ${lawyerDetails.expertise}`}
                </Typography>
            </BioStack>
            <LawyerCharacteristicsCards
                cost={lawyerDetails.cost}
                rating={lawyerDetails.rating}
                experience={lawyerDetails.experience}
            />
            <SubHeading>About Me</SubHeading>
            <Typography
                variant="subtitle3"
                color="secondary.dark"
                lineHeight={1.5}
            >
                <b style={{ fontWeight: "600" }}>{lawyerDetails.expertise}</b>
                {` ${lawyerDetails.about}`}
            </Typography>
            <SubHeading>Consultation charge/hr</SubHeading>
            <Typography
                variant="subtitle3"
                color="text.disabled"
                lineHeight={1.5}
                marginBottom="2vh"
            >{`Your meeting would be charged in advance. ${lawyerDetails.name} usually charges an hourly fee for providing legal consultation`}</Typography>
            {!expanded && (
                <OutlinedButton
                    onClick={expandHandler}
                >{`Book a meeting for $${lawyerDetails.cost}/hr`}</OutlinedButton>
            )}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <DatePicker
                    value={appointmentDate}
                    onChange={dateChangeHandler}
                />
                <SubHeading>Available Time</SubHeading>
                <TimeSlotGrid
                    timeSlots={lawyerDetails.availableTimeSlots}
                    value={appointmentTime}
                    onChange={timeChangeHandler}
                />
            </Collapse>
            {lawyerDetails.practiceAreas && (
                <React.Fragment>
                    <SubHeading>Practice Areas</SubHeading>
                    <BulletedList listItems={lawyerDetails.practiceAreas} />
                </React.Fragment>
            )}
            {lawyerDetails.practiceAreas && (
                <React.Fragment>
                    <SubHeading>Awards & Recognitions</SubHeading>
                    <BulletedList
                        listItems={lawyerDetails.awards}
                        typographyProps={{ textTransform: "uppercase" }}
                    />
                </React.Fragment>
            )}
            {lawyerDetails.practiceAreas && (
                <React.Fragment>
                    <SubHeading>Clients</SubHeading>
                    <BulletedList
                        listItems={lawyerDetails.clients}
                        typographyProps={{ textTransform: "uppercase" }}
                    />
                </React.Fragment>
            )}
            {lawyerDetails.practiceAreas && (
                <React.Fragment>
                    <SubHeading>Office Address</SubHeading>
                    <BulletedList listItems={lawyerDetails.address} />
                </React.Fragment>
            )}
            <Button
                variant="contained"
                fullWidth
                disabled={!appointmentDate || !appointmentTime}
            >
                Book a Meeting
            </Button>
        </WrapperBox>
    );
};

export default LawyerProfile;
