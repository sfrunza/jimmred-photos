import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          All Events
        </Typography>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
