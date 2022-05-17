import { Card, CardHeader } from "@mui/material";
import classes from "./AnswerCard.module.css";
import RandomPerson from "../../resources/random.jpg";
function AnswerCard() {
  return (
    <>
      <Card className={classes.TopCard}>
        <div className={classes.WrapperForAll}>
          <img src={RandomPerson} alt="ok" className={classes.Image} />
          <div className={classes.CardHeading}> {`Peter Jones`} </div>
          <div className={classes.CardHeading2}>26 March, 2022 | 11:29 </div>
        </div>
        <div className={classes.CardContent}>
          This is a dummy answer, baap ki jaydaat hadapne aa gayi saali, thodi
          si sharam karo
        </div>
      </Card>
    </>
  );
}
export default AnswerCard;
