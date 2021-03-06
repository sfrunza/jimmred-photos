/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Typography, ListItemIcon } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    flexDirection: "column",
    alignItems: "center",
  },

  listItemIcon: {
    minWidth: "auto",
    color: "#000",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  menuItem: {
    // marginRight: theme.spacing(8),
  },
  menuGroupItem: {
    padding: theme.spacing(2, 0),
  },
  menuGroupTitle: {
    // fontWeight: 900,
    textDecoration: "none",
    // marginLeft: 15,
    fontSize: 16,
  },
  divider: {
    width: "100%",
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1, textAlign: "center" }}>
    <RouterLink {...props} />
  </div>
));

const SidebarNav = ({ pages, onClose, className, ...rest }) => {
  const classes = useStyles();

  const MenuGroup = (props) => {
    return (
      <List disablePadding>
        {props.pages.map((page, i) => {
          return (
            <ListItem disableGutters key={i} className={classes.menuGroupItem}>
              <Typography
                variant="body2"
                component={CustomRouterLink}
                to={page.href}
                className={classes.menuGroupTitle}
                color="textPrimary"
                onClick={onClose}
              >
                {page.title}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const LandingPages = () => {
    return (
      <div>
        <div className={classes.menuItem}>
          <MenuGroup pages={pages} />
        </div>
      </div>
    );
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon style={{ width: "1.3em", height: "1.3em" }} />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LandingPages />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;
