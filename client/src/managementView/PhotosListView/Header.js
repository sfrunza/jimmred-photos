import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import Uploader from "src/components/Uploader";

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      spacing={3}
    >
      <Grid item className={classes.box}>
        <Typography variant="h3" color="textPrimary">
          All Photos
        </Typography>
        <Box flexGrow={0.5}>
          <Uploader text="Add photo" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
