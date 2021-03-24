import React from "react";
// import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import TopBar from "./TopBar";
import ImageSelect from "./ImageSelect";
import ActionSection from "./ActionSection";
// import { useStateValue } from "src/StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    marginTop: theme.spacing(16),
    padding: theme.spacing(0, 4),
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  paddingZero: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px !important",
      marginBottom: theme.spacing(6),
    },
  },
}));

const DialogView = ({ photo, handleClose, onNext, onPrev, history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar image={photo} handleClose={handleClose} history={history} />
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} md={9} className={classes.paddingZero}>
          <ImageSelect image={photo} onNext={onNext} onPrev={onPrev} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ActionSection image={photo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DialogView;
