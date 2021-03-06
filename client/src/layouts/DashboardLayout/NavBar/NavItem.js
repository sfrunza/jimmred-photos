import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: "center",
  },
  buttonLeaf: {
    color: theme.palette.text.primary,
    padding: "10px 8px",
    display: "flex",
    justifyContent: "center",
    textTransform: "none",
    letterSpacing: 0,
    width: "fit-content",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

function NavItem({
  title,
  user,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  info: Info,
  ...rest
}) {
  const classes = useStyles();

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <div className={classes.title}>{title}</div>
        {Info && <Info className={classes.info} />}
      </Button>
    </ListItem>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
