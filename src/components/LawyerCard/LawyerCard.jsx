import { Avatar, Badge, Card, ListItem, Stack } from "@mui/material";
import * as React from "react";
import classes from "./LawyerCard.module.css";
import SampleLawyer from "../../resources/Bitmap.jpg";
import { ReactComponent as StarIcon } from "../../resources/Vector.svg";
const LawyerCard = (props) => {
  return (
    <Card className={classes.WrapperCard}>
      <Stack className={classes.WrapperStackForCard}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          badgeContent={
            !props.blueStar ? null : <div className={classes.BlueDot}></div>
          }
        >
          <Avatar src={props.image} sx={{ width: "72px", height: "72px" }} />
        </Badge>
        <Stack className={classes.WrapperStackForName}>
          <ListItem className={classes.NameLawyer}>{props.name}</ListItem>
          <ListItem className={classes.SinceYear}>
            Since {props.yearPractice}
          </ListItem>
          <ListItem className={classes.Cost}>${props.cost}/hr</ListItem>
          <Stack direction="row" spacing={"-25px"} className={classes.Review}>
            <ListItem className={classes.ListItem}>
              <StarIcon transform="scale(1.4)" />
            </ListItem>
            <ListItem className={classes.ListItem}>
              {props.starReviews}
            </ListItem>
            <ListItem className={classes.ListItem}>
              (${props.numberOfReviews} reviews)
            </ListItem>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
export default LawyerCard;
