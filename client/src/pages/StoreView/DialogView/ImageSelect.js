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
  },
  imageContainer: {
    textAlign: "center",
  },
  image: {
    width: "auto",
    height: "auto",
    maxHeight: "75vh",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  pointer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const ImageSelect = ({ image, onNext, onPrev }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Typography
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => onPrev()}
        >
          <ChevronLeftIcon size={60} strokeWidth="0.5" />
        </Typography>
      </Box>
      <Box className={classes.imageContainer} flexGrow="1">
        <img src={image.image.url} alt={image.name} className={classes.image} />
      </Box>
      <Box>
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
