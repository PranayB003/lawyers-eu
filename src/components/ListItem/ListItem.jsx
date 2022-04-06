import { ListItem, ListItemText } from "@mui/material";
import { IconButton, Divider } from "@mui/material";
import { ReactComponent as NextIcon } from "../../resources/Arrow.svg";
import classes from "./ListItem.module.css";
const ListItemCity = (props) => {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <NextIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={props.city}
          className={classes.CityName}
          // secondary={secondary ? "Secondary text" : null}
        />
      </ListItem>
      <hr className={classes.Divider} />
    </>
  );
};
export default ListItemCity;
