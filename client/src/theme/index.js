// import { blue, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import typography from "./typography";
import palette from "./palette";

// A custom theme for this app
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "blue",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: "red",
  //   },
  //   background: {
  //     default: "#fff",
  //   },
  // },
  // typography: {
  //   fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(
  //     ", "
  //   ),
  //   fontSize: 14,
  // },

  typography,
  palette,
});

export default theme;
