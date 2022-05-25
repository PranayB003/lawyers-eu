import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import classes from "./Forum.module.css";
import TitleBar from "../../components/TitleBar/TitleBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ReactComponent as SettingsSVG } from "../../resources/Icon.svg";
import { ReactComponent as GoBackSVG } from "../../resources/Union.svg";
import CardForForum from "../../components/CardForForum/CardForForum";
const Forum = () => {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const searchChangeHandler = (e) => {
    setSearchTerm(e);
  };
  const DataForForumCards = [
    {
      timeStamp: "25th March, 2022 (3 hours, 51 minutes ago)",
      ChipData: "intellectual property Right",
      Heading:
        "I have a small query can a Christian spinster women demand for fathers ancestor",
      BodyText:
        "I have a small query can a Christian spinster women demand for father's ancestors property while he is alive and dwelling in the same premises (more than one property all inheritance belonging to ancestors property loca…",
    },
    {
      timeStamp: "25th March, 2022 (3 hours, 51 minutes ago)",
      ChipData: "intellectual property Right",
      Heading:
        "I have a small query can a Christian spinster women demand for fathers ancestor",
      BodyText:
        "I have a small query can a Christian spinster women demand for father's ancestors property while he is alive and dwelling in the same premises (more than one property all inheritance belonging to ancestors property loca…",
    },
    {
      timeStamp: "25th March, 2022 (3 hours, 51 minutes ago)",
      ChipData: "intellectual property Right",
      Heading:
        "I have a small query can a Christian spinster women demand for fathers ancestor",
      BodyText:
        "I have a small query can a Christian spinster women demand for father's ancestors property while he is alive and dwelling in the same premises (more than one property all inheritance belonging to ancestors property loca…",
    },
  ];
  return (
    <>
      <Box className={classes.wrapperBox}>
        <TitleBar
          Title="Forum"
          startIcon={<GoBackSVG />}
          endIcon={<SettingsSVG />}
        />
        <SearchBar
          value={searchTerm}
          onChange={searchChangeHandler}
          searchBarDefaultValue="Search Question"
        />

        <Box className={classes.LastBox}>
          <Grid container className={classes.box2}>
            {DataForForumCards.map((elem) => {
              return (
                <>
                  <CardForForum
                    timeStamp={elem.timeStamp}
                    ChipData={elem.ChipData}
                    Heading={elem.Heading}
                    BodyText={elem.BodyText}
                  />
                </>
              );
            })}
          </Grid>
        </Box>
        <Typography className={classes.EndingHeading}>
          Need Legal Advice ?
        </Typography>
        <Typography className={classes.EndingText}>
          Send us your requirements and get proposals directly to your inbox.
        </Typography>
        <Button variant="outlined" className={classes.EndingButton} >Get Free Proposals</Button>
      </Box>
    </>
  );
};
export default Forum;
