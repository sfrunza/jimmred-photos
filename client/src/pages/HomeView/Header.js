import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4, 2),
    // color: '#fff',

    minWidth: "400px",
    [theme.breakpoints.down("xs")]: {
      minWidth: "92%",
      flexDirection: "column",
    },
    margin: "auto",
  },
  header: {
    fontSize: "1.5rem",
  },
  link: {
    cursor: "pointer",
    color: "inherit",
    backgroundColor: "#000",
    display: "flex",
    borderRadius: "50%",
    padding: 6,
    margin: theme.spacing(0, 2),
  },
  listItem: {
    display: "flex",
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Box>
        <Typography
          variant="caption"
          color="textPrimary"
          className={classes.header}
        >
          URBAN PHOTOGRAPHER
        </Typography>
      </Box>
      <Box display="flex" mt={isMd ? 0 : 1}>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://www.instagram.com/jimmredphotos/"
            target="_blank"
          >
            <InstagramIcon color="white" size="20" />
          </Typography>
        </Box>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://www.facebook.com/Jimmredphoto"
            target="_blank"
          >
            <FacebookIcon color="white" size="20" />
          </Typography>
        </Box>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://twitter.com/Jamm64550004"
            target="_blank"
          >
            <TwitterIcon color="white" size="20" />
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
