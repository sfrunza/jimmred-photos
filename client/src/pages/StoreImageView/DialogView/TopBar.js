import React, { useState } from "react";
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
  Dialog,
} from "@material-ui/core";
import {
  X as XIcon,
  Heart as HeartIcon,
  ShoppingCart as ShoppigCartIcon,
  ChevronRight as ChevronRightIcon,
} from "react-feather";
import { FiSend } from "react-icons/fi";
import { useStateValue } from "src/StateProvider";
import CheckoutList from "src/layouts/MainLayout/CheckoutList";
import { useCartContext } from "src/cart_context";
import Share from "./Share";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    overflow: "hidden",
    color: "#000",
    height: 100,
    zIndex: 1100,
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
  dialog: {
    width: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

const TopBar = ({ handleClose, image, history }) => {
  const classes = useStyles();
  const [{ open }, dispatch] = useStateValue();
  const { total_items } = useCartContext();
  // const [draw, setDraw] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography variant="h4" className={classes.listItemText}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <HeartIcon strokeWidth="1.5" size="30" />
                <Box ml={1}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    style={{ fontSize: 22 }}
                  >
                    {image.likes}
                  </Typography>
                </Box>
              </div>
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setModalOpen(true)}
          >
            <Typography variant="h4" className={classes.listItemText}>
              <FiSend size="30" strokeWidth="1.3" />
            </Typography>
          </ListItem>
          <Dialog
            classes={{
              paper: classes.dialog,
            }}
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Share history={history} onClose={handleModalClose} />
          </Dialog>
          <ListItem className={classes.listItem}>
            <Typography
              variant="h4"
              className={classes.listItemText}
              onClick={handleDrawerOpen}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ShoppigCartIcon strokeWidth="1.5" size="30" />
                <Box ml={1}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    style={{ fontSize: 22 }}
                  >
                    {total_items}
                  </Typography>
                </Box>
              </div>
            </Typography>
            <Drawer
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
            onClick={() => handleClose()}
          >
            <XIcon size={50} strokeWidth="0.7" />
          </Typography>
        </ListItem>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
