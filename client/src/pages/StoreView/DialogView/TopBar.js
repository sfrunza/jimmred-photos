import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  List,
  ListItem,
  IconButton,
  Box,
  Drawer,
  Divider,
} from "@material-ui/core";
import { X as XIcon } from "react-feather";
import {
  Heart as HeartIcon,
  Share as ShareIcon,
  ShoppingCart as ShoppigCartIcon,
  ChevronRight as ChevronRightIcon,
} from "react-feather";
import { useStateValue } from "src/StateProvider";
import CheckoutList from "src/layouts/MainLayout/CheckoutList";
import { useCartContext } from "src/cart_context";

const useStyles = makeStyles((theme) => ({
  root: {
    // justifyContent: "center",
    background: "#fff",
    overflow: "hidden",
    color: "#000",
    // position: "fixed",
    height: 100,
    zIndex: 1100,
    // // transition: "height .2s ease-in-out",
    // width: "100%",
    // margin: "auto",
    // right: "auto",
    boxShadow: "none",
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
    margin: "0 auto",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
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

const TopBar = ({ setOpen, image }) => {
  const classes = useStyles();
  const [{ open }, dispatch] = useStateValue();
  const { total_items } = useCartContext();
  // const [draw, setDraw] = useState(false);

  const handleDrawerOpen = () => {
    // setDraw(true);
    dispatch({
      type: "SET_OPEN",
      payload: true,
    });
  };

  const handleDrawerClose = () => {
    // setDraw(false);
    dispatch({
      type: "SET_OPEN",
      payload: false,
    });
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography variant="h4" className={classes.listItemText}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <HeartIcon strokeWidth="1.3" />
                <Box ml={1}>
                  <Typography variant="h4" component="h4" color="inherit">
                    {image.likes}
                  </Typography>
                </Box>
              </div>
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography variant="h4" className={classes.listItemText}>
              <ShareIcon strokeWidth="1.3" />
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="h4"
              className={classes.listItemText}
              onClick={handleDrawerOpen}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ShoppigCartIcon strokeWidth="1.3" />
                <Box ml={1}>
                  <Typography variant="h4" component="h4" color="inherit">
                    {total_items}
                  </Typography>
                </Box>
              </div>
            </Typography>
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
        <div className={classes.flexGrow} />
        <ListItem className={classes.listItem}>
          <Typography
            type="button"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          >
            <XIcon size={50} strokeWidth="0.5" />
          </Typography>
        </ListItem>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
