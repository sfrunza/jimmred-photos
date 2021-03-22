import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  videoIframe: {
    // borderRadius: theme.spacing(1),
    margin: "auto",
    display: "flex",
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      // boxShadow: "none",
      width: "88%",
    },
  },
  navButtons: {
    backgroundColor: "transparent",
    color: "#000",
    margin: 0,
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      color: "#000",
    },
  },
  navWrapper: {
    "&:hover > button": {
      backgroundColor: "transparent !important",
      color: "#000",
    },
  },
}));

const VideoSection = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  var items = [
    { name: "video1", url: "https://www.youtube.com/embed/C26E2qSiUdA" },
    { name: "video2", url: "https://www.youtube.com/embed/PiHs-BznuDs" },
    { name: "video3", url: "https://www.youtube.com/embed/onOEns_MnC4" },
  ];

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={true}
      navButtonsProps={{
        className: classes.navButtons,
      }}
      navButtonsWrapperProps={{
        className: classes.navWrapper,
      }}
    >
      {items.map((item, i) => {
        return (
          <Paper key={i} elevation={0}>
            <iframe
              className={classes.videoIframe}
              title={item.name}
              height={isSm ? "500" : "200"}
              src={item.url}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </Paper>
        );
      })}
    </Carousel>
  );
};

export default VideoSection;
