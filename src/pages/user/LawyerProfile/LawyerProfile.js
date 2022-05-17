import { Box } from "@mui/material";
import classes from "./LawyerProfile.module.css";
import TitleBar from "../../../components/TitleBar/TitleBar";
import { ReactComponent as GoBackSVG } from "../../../resources/Union.svg";
import { ReactComponent as SingleBlackDot } from "../../../resources/Vector.svg";
import LawyerCard from "../../../components/LawyerProfileCard/LawyerProfileCard";
import SampleLayer from "../../../resources/Bitmap.jpg";
import Description from "../../../components/FeatureCard/Description";
function LawyerProfile() {
  const ThreeDots = [1, 1, 1].map((elem) => {
    return (
      <>
        <SingleBlackDot />
      </>
    );
  });
  return (
    <>
      <Box className={classes.wrapperBox}>
        <TitleBar
          Title="Proposals"
          startIcon={<GoBackSVG />}
          endIcon={ThreeDots}
        />
        <LawyerCard
          name="Vivek Sharma"
          yearPractice="Expert in Copyright law, IT law, Patent , Trademark, Entertainment law"
          cost="90"
          startReviews="90"
          numberOfReviews="4.5"
          image={SampleLayer}
          blueStar={false}
        />
        <Description />
      </Box>
    </>
  );
}
export default LawyerProfile;
