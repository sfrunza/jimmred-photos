import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  videoIframe: {
    borderRadius: theme.spacing(1),
    margin: "auto",
    display: "flex",
    width: "87%",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      width: "75%",
    },
  },
  navButtons: {
    backgroundColor: "transparent",
    color: "#000",
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
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  var items = [
    { name: "video1", url: "https://www.youtube.com/embed/ZZp4EHKXXX0" },
    { name: "video2", url: "https://www.youtube.com/embed/rjuQKcXQBtw" },
    { name: "video3", url: "https://www.youtube.com/embed/uBE9lRoOBJA" },
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
              height={isMd ? "415" : "200"}
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

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
