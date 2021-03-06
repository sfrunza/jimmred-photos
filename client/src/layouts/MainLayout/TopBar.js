import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  Drawer,
  Divider,
  Box,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CustomRouterLink from "src/components/CustomRouterLink";
import { ShoppingCart as ShoppigCartIcon } from "react-feather";
import { ChevronRight as ChevronRightIcon } from "react-feather";
import CheckoutList from "./CheckoutList";
import { useStateValue } from "src/StateProvider";
import { useCartContext } from "src/cart_context";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    // justifyContent: "center",
    background: "#fff",
    overflow: "hidden",
    color: "#000",
    // position: "fixed",
    height: 74,
    // // transition: "height .2s ease-in-out",
    // width: "100%",
    // margin: "auto",
    // right: "auto",
    boxShadow: "none",
    // zIndex: 999,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    width: "100%",
    maxWidth: 1500,
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  listItem: {
    width: "auto",
    padding: theme.spacing(2),
  },
  listItemText: {
    flex: "0 0 auto",
    // marginRight: theme.spacing(2),
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: "rgb(5, 15, 25)",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      opacity: 0.9,
      cursor: "pointer",
    },
  },
  logo: {
    fontWeight: 700,
  },
  listItemTextMobile: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: "rgba(0,0,0,.54)",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.primary.dark,
      cursor: "pointer",
    },
  },
  iconButton: {
    color: "#000",
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  shoppingDrawer: {
    // zIndex: 2000,
  },

  drawerPaper: {
    width: "100%",
    maxWidth: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "unset",
    },
  },
  drawerHeader: {
    display: "flex",
    backgroundColor: "#000",
    minHeight: 74,
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
}));

function Topbar({ className, onSidebarOpen, pages, ...rest }) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [{ open }, dispatch] = useStateValue();
  const { total_items } = useCartContext();

  const handleDrawerOpen = () => {
    // setOpen(true);
    dispatch({
      type: "SET_OPEN",
      payload: true,
    });
  };

  const handleDrawerClose = () => {
    // setOpen(false);
    dispatch({
      type: "SET_OPEN",
      payload: false,
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar {...rest} className={clsx(classes.root, className)}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography
            variant="h4"
            className={classes.logo}
            component={CustomRouterLink}
            to="/"
          >
            JimmRedPhotos
          </Typography>
          <div className={classes.flexGrow} />
          <Hidden smDown>
            <List className={classes.navigationContainer}>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.listItemText}
                  component={CustomRouterLink}
                  to="/"
                >
                  Portfolio
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.listItemText}
                  component={CustomRouterLink}
                  to="/about"
                >
                  About
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.listItemText}
                  component={CustomRouterLink}
                  to="/contact"
                >
                  Contact
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.listItemText}
                  component={CustomRouterLink}
                  to="/book"
                >
                  Book Online
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.listItemText}
                  component={CustomRouterLink}
                  to="/store"
                >
                  Store
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button onClick={handleDrawerOpen}>
                  <ShoppigCartIcon />
                  <Typography variant="h4">{total_items}</Typography>
                </Button>
                <Drawer
                  className={classes.shoppingDrawer}
                  anchor="right"
                  open={open}
                  elevation={12}
                  onClose={handleDrawerClose}
                  transitionDuration={300}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                    <Box flexGrow={0.5}>
                      <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon
                          color="white"
                          size={50}
                          strokeWidth="0.5"
                        />
                      </IconButton>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <ShoppigCartIcon color="white" />
                      <Typography variant="h4" style={{ color: "#fff" }}>
                        {total_items}
                      </Typography>
                    </Box>
                  </div>
                  <Divider />
                  <CheckoutList />
                </Drawer>
              </ListItem>
            </List>
          </Hidden>
          <Hidden mdUp>
            <ListItem className={classes.listItem}>
              <Button onClick={handleDrawerOpen}>
                <ShoppigCartIcon />
                <Typography variant="h4">{total_items}</Typography>
              </Button>
              <Drawer
                className={classes.shoppingDrawer}
                anchor="right"
                open={open}
                elevation={12}
                onClose={handleDrawerClose}
                transitionDuration={300}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <Box flexGrow={0.5}>
                    <IconButton onClick={handleDrawerClose}>
                      <ChevronRightIcon color="white" size="30" />
                    </IconButton>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <ShoppigCartIcon color="white" />
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      {total_items}
                    </Typography>
                  </Box>
                </div>
                <Divider />
                <CheckoutList />
              </Drawer>
            </ListItem>

            <IconButton
              className={classes.iconButton}
              onClick={onSidebarOpen}
              aria-label="Menu"
            >
              <MenuRoundedIcon style={{ width: "1.3em", height: "1.3em" }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
