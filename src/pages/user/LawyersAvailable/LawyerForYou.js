import React, { useState } from "react";

import { Box, Typography, Stack, Button, Grid } from "@mui/material";
import classes from "./LawyerForYou.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { ReactComponent as SettingsSVG } from "../../../resources/Icon.svg";
import { ReactComponent as GoBackSVG } from "../../../resources/Union.svg";
import TitleBar from "../../../components/TitleBar/TitleBar";
import LawyerCard from "../../../components/LawyerCard/LawyerCard";
import SampleLawyer from "../../../resources/Bitmap.jpg";
const SelectServices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const Lawyers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
      blueStar:false,
      image: SampleLawyer,
    },
  ];
  const searchChangeHandler = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
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
        <Box className={classes.LastBox} >
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

export default SelectServices;
