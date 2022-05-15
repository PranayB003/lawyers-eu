import * as React from "react";
import { Box, Grid } from "@mui/material";
import classes from "./Forum.module.css";
import TitleBar from "../../components/TitleBar/TitleBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ReactComponent as SettingsSVG } from "../../resources/Icon.svg";
import { ReactComponent as GoBackSVG } from "../../resources/Union.svg";
import SampleLawyer from "../../resources/Bitmap.jpg";
import LawyerCard from "../../components/LawyerCard/LawyerCard";
const Forum = () => {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const AvailableLawyers = [
    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: true,
      image: SampleLawyer,
    },
    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: false,
      image: SampleLawyer,
    },

    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: false,
      image: SampleLawyer,
    },
    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: false,
      image: SampleLawyer,
    },
    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: false,
      image: SampleLawyer,
    },
    {
      name: "Bellamy James",
      yearPractice: "1996",
      cost: "45",
      starReviews: "4.5",
      numberOfReviews: "69",
      blueStar: false,
      image: SampleLawyer,
    },
  ];

  const searchChangeHandler = (e) => {
    setSearchTerm(e);
  };
  return (
    <>
      <Box className={classes.wrapperBox}>
        <TitleBar
          Title="Lawyers For You"
          startIcon={<GoBackSVG />}
          endIcon={<SettingsSVG />}
        />
        <SearchBar value={searchTerm} onChange={searchChangeHandler} />
        <Box className={classes.LastBox}>
          <Grid container className={classes.box2}>
            {AvailableLawyers.map((SingleLawyer) => (
              <LawyerCard
                name={SingleLawyer.name}
                yearPractice={SingleLawyer.yearPractice}
                cost={SingleLawyer.cost}
                starReviews={SingleLawyer.starReviews}
                numberOfReviews={SingleLawyer.numberOfReviews}
                image={SingleLawyer.image}
                blueStar={SingleLawyer.blueStar}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Forum;
