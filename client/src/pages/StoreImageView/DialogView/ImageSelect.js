import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    // [theme.breakpoints.down("sm")]: {
    //   flexWrap: "wrap",
    // },
    "&*": {
      flex: "1 100%",
    },
  },
  imageContainer: {
    textAlign: "center",

    [theme.breakpoints.up("lg")]: {
      order: 2,
      flex: "3 0px",
    },
  },
  image: {
    width: "auto",
    height: "auto",
    maxHeight: "75vh",
    maxWidth: "100%",
    pointerEvents: "none",
    objectFit: "contain",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  pointer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  aside: {
    [theme.breakpoints.down("xl")]: {
      // justifyContent: "space-between",
      flex: "1 0 0",
    },
  },
  aside1: {
    [theme.breakpoints.up("lg")]: {
      order: 1,
    },
  },
  aside2: {
    [theme.breakpoints.up("lg")]: {
      order: 3,
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      flex: 1,
    },
  },
}));

const ImageSelect = ({ image, onNext, onPrev }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.imageContainer}>
        <img src={image.image.url} alt={image.name} className={classes.image} />
      </Box>
      <Box className={(classes.aside, classes.aside1)}>
        <Typography
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => onPrev()}
        >
          <ChevronLeftIcon size={60} strokeWidth="0.5" />
        </Typography>
      </Box>
      <Box className={(classes.selected, classes.aside2)}>
        <Typography
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => onNext()}
        >
          <ChevronRightIcon size={60} strokeWidth="0.5" />
        </Typography>
      </Box>
    </div>
  );
};

export default ImageSelect;
