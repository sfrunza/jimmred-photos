import React from "react";
import CustomRouterLink from "src/components/CustomRouterLink";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Account from "./Account";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: "transparent",
    height: 74,
    position: "absolute",
  },
  toolbar: {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: "#000",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.primary.dark,
      cursor: "pointer",
    },
  },
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" component={CustomRouterLink} to="/">
          JimmRedPhotos
        </Typography>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
