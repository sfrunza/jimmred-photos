import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import HeroBackground from "src/components/HeroBackground";
import PropTypes from "prop-types";
import CustomRouterLink from "src/components/CustomRouterLink";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: 700,
    margin: "32px auto",
    padding: theme.spacing(0, 1),
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: "65vh",
  },
  subTitle: {
    borderColor: "rgba(44, 44, 43, 0.2)",
    // border: "1px solid",
    backgroundColor: "rgba(255, 255, 255, 0)",
    gap: 1,
    // marginTop: theme.spacing(3),
  },
  subTitleItem: {
    border: "1px solid rgba(44, 44, 43, 0.2)",
    padding: theme.spacing(2),
    lineHeight: "1.5em",
    // border-color: rgba(44, 44, 43, 0.2);
    // border-top-width: 1px;
    // border-left-width: 1px;
    marginTop: "calc(0px - 1px)",
    marginLeft: "calc(0px - 1px)",
  },
  divider: {
    width: "100%",
  },
  textCenter: {
    textAlign: "center",
  },
}));

const ServicesComponent = (props) => {
  const {
    image,
    title,
    onClick,

    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Page title="Home" className={classes.root}>
      <HeroBackground backgroundImage="https://static.wixstatic.com/media/43cddb4301684a01a26eaea100162934.jpeg/v1/fill/w_1350,h_360,fp_0.50_0.50,q_85/43cddb4301684a01a26eaea100162934.webp" />
      <Box className={classes.mainContainer}>
        <Box>
          <Typography variant="h2">Out Door Shoot</Typography>
        </Box>
        <Box direction="row" display="flex" className={classes.subTitle}>
          <Typography variant="body1" className={classes.subTitleItem}>
            1hr
          </Typography>
          <Typography
            variant="body1"
            className={classes.subTitleItem}
            style={{ borderLeft: "none" }}
          >
            Introductory Meeting
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          disableElevation
          component={CustomRouterLink}
          to="/book"
        >
          Book Now
        </Button>
        <Divider className={classes.divider} />
        <Box className={classes.textCenter}>
          <Typography variant="h4" gutterBottom>
            Service Description
          </Typography>
          <Typography variant="body1">
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer, and the benefits they will
            receive. A great description gets readers in the mood, and makes
            them more likely to go ahead and book.
          </Typography>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.textCenter}>
          <Typography variant="h4" gutterBottom>
            Contact Details
          </Typography>
          <Typography variant="body1">info@mysite.com</Typography>
          <Typography variant="body1">
            500 Terry Francois Street, San Francisco, CA, USA
          </Typography>
        </Box>
      </Box>
    </Page>
  );
};

ServicesComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ServicesComponent;
