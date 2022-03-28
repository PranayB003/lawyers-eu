import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

let theme = createTheme({
    palette,
    typography,
});

theme = responsiveFontSizes(theme);

console.log(theme);

export default theme;
