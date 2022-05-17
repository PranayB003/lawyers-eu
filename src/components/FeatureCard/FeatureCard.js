import { Card, Grid, Stack } from "@mui/material";
import * as React from "react";
import classes from "./FeatureCard.module.css";
import { ReactComponent as RectangleBackGround } from "../../resources/Rectangle.svg";
const FeatureCard = (props) => {
  return (
    <Card className={classes.WrapperCard} elevation={0}>
      <Stack className={classes.WrapperStackForCard}>
        <Card elevation={1} className={classes.Card}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems={`center`}
            justifyContent={`center`}
          >
            <Grid item xs={3}>
              <RectangleBackGround className={classes.RectangleBackground} />
              <props.Badge className={classes.Badge1} />
              <div className={classes.Data}>{props.Data}</div>
              <div className={classes.Data2nd}>{props.Type}</div>
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </Card>
  );
};
export default FeatureCard;
