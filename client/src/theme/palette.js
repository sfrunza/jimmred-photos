import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

const palette = {
  black,
  white,
  alternate: "rgb(247, 249, 250)",
  primary: {
    main: colors.blue[600],
    // main: "#19857b",
  },
  secondary: {
    // main: "#19857b",
    main: "#f95738",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: "#121037",
    secondary: "#5e5d5d",
    link: colors.blue[600],
  },
  background: {
    default: "#fff",
    paper: white,
    green: "#19857b",
    dark: "#f4f6f8",
  },
  icon: colors.blueGrey[600],
  // divider: colors.grey[200],
};

export default palette;
