import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

import { SidebarNav } from "./components";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    // maxWidth: 250,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(1),
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}));

function Sidebar({ open, pages, variant, onClose, className, ...rest }) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
      transitionDuration={500}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} onClose={onClose} />
      </div>
    </Drawer>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
