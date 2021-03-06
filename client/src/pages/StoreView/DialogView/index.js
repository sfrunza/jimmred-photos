import React, { useState, useEffect } from "react";
// import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import TopBar from "./TopBar";
import ImageSelect from "./ImageSelect";
import ActionSection from "./ActionSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // overflow: "hidden",
    height: "100%",
  },
  mainContainer: {
    marginTop: theme.spacing(16),
    padding: theme.spacing(0, 4),
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      // height: "80%",
    },
  },
  paddingZero: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px !important",
      marginBottom: theme.spacing(6),
    },
  },
}));

const DialogView = ({ image, images, setOpen }) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(null);
  const [currentId, setCurrentId] = useState(images.indexOf(image));

  const onNext = () => {
    if (currentId + 1 > images.length - 1) {
      setCurrentId(0);
    } else {
      setCurrentId(currentId + 1);
    }
  };
  const onPrev = () => {
    if (currentId - 1 < 0) {
      setCurrentId(images.length - 1);
    } else {
      setCurrentId(currentId - 1);
    }
  };

  useEffect(() => {
    if (currentId >= 0) {
      setCurrentImage(images[currentId]);
    }
  }, [currentId, images]);

  if (!currentImage) {
    return null;
  }

  return (
    <div className={classes.root}>
      <TopBar image={currentImage} setOpen={setOpen} />
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} md={9} className={classes.paddingZero}>
          <ImageSelect image={currentImage} onNext={onNext} onPrev={onPrev} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ActionSection image={currentImage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DialogView;
