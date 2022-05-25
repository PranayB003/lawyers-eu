import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./Description.module.css";
import { ReactComponent as SingleDot } from "../../resources/Vector.svg";
function Description(props) {
  return (
    <>
      <Box>
        <Typography className={classes.Heading}>Message</Typography>
        <Typography>
          Hi Sarang, I went thorugh your proposal. I have gone through the
          details, this is completely possible to do so, i am ready to solve
          this case for you, you will need trhe folloying documents: <br />{" "}
          <SingleDot /> PAN Card <br />
          <SingleDot /> Adhar Card <br /> <SingleDot /> Ration Card <br /> We
          can talk about the details on call, the whole case will cost you $100.
          LEt me know if you’re interested. Regards
        </Typography>
        <Box className={classes.BoxWrapperForButton}>
          <Button variant="outlined" fullWidth>
            View Lawyer Profile
          </Button>
          <Button className={classes.SecondButton} variant="outlined" fullWidth>
           Book a Meeting 
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default Description;
