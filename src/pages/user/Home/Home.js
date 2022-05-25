import { Box } from "@mui/material";
import TitleBar from "../../../components/TitleBar/TitleBar";
import { ReactComponent as ThreeBars } from "../../../resources/3Bars.svg";
import { ReactComponent as QuestionMark } from "../../../resources/QuestionMark.svg";
import { ReactComponent as Bell } from "../../../resources/Bell.svg";
import classes from "./Home.module.css";
import BlackCard from "../../../components/BlackCard/BlackCard";
function Home() {
  return (
    <>
      <Box className={classes.wrapperBox}>
        <TitleBar
          SideTitle="Welcome Sarang"
          startIcon={<ThreeBars />}
          endIcon={<Bell />}
          secondEndIcon={<QuestionMark />}
        />
        <BlackCard mainText={`Get Legally Empowered`} />
      </Box>
    </>
  );
}
export default Home;
