import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: "#f1f1f1",
    // maxWidth: 1500,
    // overflow: 'hidden',
    height: "100%",
    // margin: 'auto',
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },

  main: {
    maxWidth: 1500,
    // overflow: 'hidden',
    height: "100%",
    margin: "auto",
    minHeight: "calc(100vh - 88px)",
  },
}));

function MainLayout({ children, history }) {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const pages = [
    {
      title: "Portfolio",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Book Online",
      href: "/book",
    },
    {
      title: "Store",
      href: "/store",
    },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div className={classes.root}>
      <TopBar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        history={history}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main className={classes.main}>{children}</main>
      <Footer pages={pages} />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
