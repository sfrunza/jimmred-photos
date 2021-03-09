import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.grey[200],
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4, 0),
    // color: '#fff',

    minWidth: "400px",
    [theme.breakpoints.down("xs")]: {
      minWidth: "92%",
    },
    margin: "auto",
  },
  link: {
    cursor: "pointer",
    color: "inherit",
    backgroundColor: "#000",
    display: "flex",
    borderRadius: "50%",
    padding: 5,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid item className={classes.wrapper}>
        <Typography variant="body1">
          © {new Date().getFullYear()} JimmRedPhotos.
        </Typography>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://www.instagram.com/jimmredphotos/"
            target="_blank"
          >
            <InstagramIcon color="white" size="18px" />
          </Typography>
        </Box>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://www.facebook.com/Jimmredphoto"
            target="_blank"
          >
            <FacebookIcon color="white" size="18px" />
          </Typography>
        </Box>
        <Box className={classes.link}>
          <Typography
            className={classes.listItem}
            component="a"
            href="https://twitter.com/Jamm64550004"
            target="_blank"
          >
            <TwitterIcon color="white" size="18px" />
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
