import classes from "./MoreRelatedQuestion.module.css";
import { ReactComponent as ArrowIcon } from "../../resources/Arrow.svg";
function MoreRelatedQuestion(props) {
  return (
    <>
      <div className={classes.TopWrapper}>
        <div className={classes.Left}>
          How may i register a start up at london
        </div>
        <div className={classes.Right}>
          <ArrowIcon />
        </div>
      </div>
      <div className={classes.TopWrapper}>
        <div className={classes.Right1}>
          <hr style={{ backgroundColor: "grey",  width:"100%" }} />
        </div>
      </div>
    </>
  );
}
export default MoreRelatedQuestion;
