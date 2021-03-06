import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { useStateValue } from "src/StateProvider";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f6f8",
    height: "100%",
    width: "100%",
    minHeight: "100vh",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "8rem",
    flexDirection: "column",
    overflow: "hidden",
  },

  content: {
    height: "100%",
    // overflow: "auto",
  },
}));

function DashboardLayout({ children, history }) {
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.root}>
      <TopBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        user={user}
        history={history}
      />

      <Container maxWidth="lg" className={classes.wrapper}>
        <div className={classes.content}>
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
            user={user}
          />
        </div>
        <div className={classes.content}>{children}</div>
      </Container>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
