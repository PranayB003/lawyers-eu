import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "./selectCity.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { ReactComponent as GoForwardSVG } from "../../../resources/UnionRight.svg";
import ListItemWithCity from "../../../components/ListItem/ListItem";
import TitleBar from "../../../components/TitleBar/TitleBar";
import LawyerCard from "../../../components/LawyerCard/LawyerCard";
import SampleLawyer from "../../../resources/Bitmap.jpg";
const SelectServices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const AvailableCities = [
    "London",
    "Manchester",
    "PeterBrough",
    "Sheffield",
    "Southampton",
  ];
  const searchChangeHandler = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <Box className={classes.wrapperBox}>
        <TitleBar
          Title="Lawyers For You"
          //   startIcon={<GoBackSVG />}
          endIcon={<GoForwardSVG />}
        />
        <SearchBar
          searchBarDefaultValue={`Search for city`}
          value={searchTerm}
          onChange={searchChangeHandler}
        />
        <Box className={classes.LastBox}>
          <Grid container className={classes.box2}>
            {AvailableCities.map((City) => (
              <ListItemWithCity city={City} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SelectServices;
