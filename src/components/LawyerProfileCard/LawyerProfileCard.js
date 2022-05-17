import { Avatar, Badge, Card, Grid, ListItem, Stack } from "@mui/material";
import * as React from "react";
import classes from "./LawyerProfileCard.module.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import { ReactComponent as DollarSign } from "../../resources/Dollar.svg";
import { ReactComponent as Badge1 } from "../../resources/Badge.svg";
import { ReactComponent as StarSVG } from "../../resources/Star.svg";
const LawyerCard = (props) => {
  const FeatureForLawyer = [
    {
      SVGSymbol: DollarSign,
      text: "$40/hr",
      type: "Experience",
    },
    {
      SVGSymbol: Badge1,
      text: "8 years",
      type: "Experience",
    },
    {
      SVGSymbol: StarSVG,
      text: "4.5",
      type: "Rating",
    },
  ];
  return (
    <Card className={classes.WrapperCard} elevation={0}>
      <Stack className={classes.WrapperStackForCard}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          badgeContent={
            !props.blueStar ? null : <div className={classes.BlueDot}></div>
          }
        >
          <Avatar src={props.image} sx={{ width: "150px", height: "150px" }} />
        </Badge>
        <Stack className={classes.WrapperStackForName}>
          <ListItem className={classes.NameLawyer}>{props.name}</ListItem>
          <ListItem className={classes.SinceYear}>
            {props.yearPractice}
          </ListItem>
          <ListItem className={classes.Cost}></ListItem>
          <Stack direction="row" spacing={"-25px"} className={classes.Review}>
            <ListItem className={classes.ListItem}></ListItem>
            <ListItem className={classes.ListItem}></ListItem>
            <ListItem className={classes.ListItem}></ListItem>
          </Stack>
        </Stack>
        {/* <Grid container style={{maxWidth:"500px"}} spacing={`12px`} > */}
          {/* {FeatureForLawyer.map((elem) => {
            return (
              <Grid item xs={4}  >
                <FeatureCard
                  Badge={elem.SVGSymbol}
                  Data={elem.text}
                  Type={elem.type}
                />
              </Grid>
            );
          })} */}
          {/* <FeatureCard
                Badge={DollarSign}
                Data={`8 Years`}
                Type={`Experience`}
              /> */}
        {/* </Grid> */}
      </Stack>

    </Card>
  );
};
export default LawyerCard;
