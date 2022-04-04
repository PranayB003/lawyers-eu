import { Grid } from "@mui/material";
import * as React from "react";
import "./SplashScreen.css";
const SplashScreen = ({}) => {
  const propsForGrid = {};
  return (
    <React.Fragment>
      <Grid container direction="column" className="ContainerForMainContent">
        <Grid item xs={3} className="MainContent">
          LAWYERS.EU
        </Grid>
        <Grid item xs={3} className="SubContent">
          Finding a laywer made easier.{" "}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default SplashScreen;
