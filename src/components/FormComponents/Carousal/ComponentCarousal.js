import * as React from "react";
import {Button, Stack, ListItem, Grid} from "@mui/material";
import "./ComponentCarousal.css";
const MainCarousel = (props) => {
  return (
    <Stack className="center">
      <ListItem className="center">
        <Stack>
          {props.content.svg}

          <ListItem className="mainHeading">
            {props.content.mainHeading}
          </ListItem>
          <ListItem className="content">{props.content.content}</ListItem>
        </Stack>
      </ListItem>
    </Stack>
  );
}
export default MainCarousel;
