import { ListItem, Stack, Slide, Grid, Button, List } from "@mui/material";
import * as React from "react";
import Carousel from "../../../components/FormComponents/Carousal/ComponentCarousal";
import "./Functionalities.css";
import { ReactComponent as SolveYourQueriesSVG } from "../../../resources/undraw_searching_p-5-ux 1.svg";
import { ReactComponent as MapSVG } from "../../../resources/Map.svg";
import { ReactComponent as BookAppointmentSVG } from "../../../resources/undraw_calendar_re_ki49 1.svg";
import { ReactComponent as WhiteDot } from "../../../resources/Dot.svg";
import { ReactComponent as BlackDot } from "../../../resources/Dot (1).svg";
var items = [
  {
    mainHeading: "Solve your queries",
    content:
      "Ask free legal questions related to your business and make smart legal decisions.",
    svg: <SolveYourQueriesSVG />,
  },

  {
    mainHeading: "Book Appointment.",
    content:
      "Book appointment with your preferred Lawyer. Receive free quotes from qualified lawyers & make smarter decisions.",
    svg: <BookAppointmentSVG />,
  },
  {
    mainHeading: "Lawyer on call",
    content:
      "Discuss your legal issue with an expert lawyer on-call. Anytime, Anywhere.",
    svg: <MapSVG />,
  },
];

const Functionalities = () => {
  const [index, setIndex] = React.useState(0);
  const content = items[index];
  const numSlides = items.length;

  const [slideIn, setSlideIn] = React.useState(true);
  const [slideDirection, setSlideDirection] = React.useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <Stack>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="TopWrapper"
      >
        <Grid item xs={12}>
          <Slide in={slideIn} direction={slideDirection}>
            <div style={{ height: "100px" }}>
              <Carousel
                content={content}
                clickFunction={() => onArrowClick("right")}
              />
            </div>
          </Slide>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="MidGridWrapper"
      >
        <Grid item xs={3}>
          <Stack direction={`row`}>
            {items.map((elem, i1ndex) => {
              return (
                <ListItem>
                  {i1ndex !== index ? <WhiteDot /> : <BlackDot />}
                </ListItem>
              );
            })}
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={1} className="TopGridWrapper">
        <Grid item xs={12} sm={6} className="wrapperForButtons">
          <Button
            variant="outlined"
            onClick={() => onArrowClick("right")}
            fullWidth
          >
            Skip
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className="wrapperForButtons1">
          <Button
            variant="contained"
            onClick={() => onArrowClick("right")}
            fullWidth
          >
            {index === 1 ? `Register` : `Next`}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Functionalities;
