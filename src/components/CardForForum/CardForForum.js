import { Card, CardHeader, Chip, Typography, Button, Box } from "@mui/material";
import classes from "./CardForForum.module.css";
import AnswerCard from "./AnswerCard";
import MoreRelatedQuesions from "../CardForForum/MoreRelatedQuestion"
function CardForForum(props) {
  return (
    <>
      {console.log(props)}
      <Card
        elevation={
          props.Elevation === null ||
          props.Elevation === undefined ||
          props.Elevation === true
            ? 1
            : 0
        }
      >
        <Box>
          <Typography className={classes.TimeStampText}>
            {props.timeStamp}
          </Typography>
          <Chip
            label={props.ChipData}
            variant="outlined"
            className={classes.ChipContainer}
          />
          <CardHeader title={props.Heading} className={classes.CardHeader} />
          <Typography className={classes.BodyText}>{props.BodyText}</Typography>
          {props.Button !== false ? (
            <Button variant="outlined" className={classes.AnswerButton}>
              3 Answers
            </Button>
          ) : null}
          {props.Answers ? (
            <Typography className={classes.AnswerWrap}>Answers</Typography>
          ) : null}
        </Box>
      </Card>
      {[1, 2].map((elem) => {
        return (
          <>
            <AnswerCard />
          </>
        );
      })}
      <div className={classes.TopWrapper}>
        {props.Answers ? (
          <div className={classes.MoreQuestionsWrap}>
            More Related Questions
          </div>
        ) : null}
      </div>
      <MoreRelatedQuesions/>
      <MoreRelatedQuesions/>
      <MoreRelatedQuesions/>
    </>
  );
}
export default CardForForum;
