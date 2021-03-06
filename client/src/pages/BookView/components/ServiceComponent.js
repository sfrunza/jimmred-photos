import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import HeroBackground from "src/components/HeroBackground";
import PropTypes from "prop-types";
import { ChevronLeft as ChevronLeftIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  mainContainer: {
    display: "flex",
    // alignItems: "center",
    maxWidth: 700,
    margin: "32px auto",
    padding: theme.spacing(0, 1),
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: "85vh",
    [theme.breakpoints.up("sm")]: {
      minHeight: "70vh",
    },
    "&:first-child": {
      alignItems: "end",
    },
  },
  subTitle: {
    borderColor: "rgba(44, 44, 43, 0.2)",
    // border: "1px solid",
    backgroundColor: "rgba(255, 255, 255, 0)",
    gap: 1,
    display: "flex",
    justifyContent: "center",
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

const data = {
  "Modeling Shoot": {
    title: "Modeling Shoot",
    img:
      "https://static.wixstatic.com/media/8f7f50ec73ea4d90887cc4f571b1acba.jpg/v1/fill/w_1304,h_360,fp_0.50_0.50,q_85/8f7f50ec73ea4d90887cc4f571b1acba.webp",
  },
  "Out Door Shoot": {
    title: "Out Door Shoot",
    img:
      "https://static.wixstatic.com/media/43cddb4301684a01a26eaea100162934.jpeg/v1/fill/w_1304,h_360,fp_0.50_0.50,q_85/43cddb4301684a01a26eaea100162934.webp",
  },
  "Video Shoot": {
    title: "Video Shoot",
    img:
      "https://static.wixstatic.com/media/603ee8fd01474f4a9b8946d204383b09.jpg/v1/fill/w_1304,h_360,fp_0.50_0.50,q_85/603ee8fd01474f4a9b8946d204383b09.webp",
  },
};

const ServiceComponent = ({ onBack, onNext, setFormState, formState }) => {
  const classes = useStyles();

  return (
    <Page title={formState.values.service} className={classes.root}>
      <HeroBackground backgroundImage={data[formState.values.service].img} />

      <Box className={classes.mainContainer}>
        <Box mt={4}>
          <Button
            onClick={() => onBack(1)}
            size="medium"
            color="primary"
            disableFocusRipple
            disableRipple
            startIcon={<ChevronLeftIcon />}
          >
            Back
          </Button>
        </Box>
        <Box className={classes.textCenter}>
          <Typography variant="h2">{formState.values.service}</Typography>
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
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            disableRipple
            disableElevation
            onClick={() => {
              onNext(1);
            }}
          >
            Book Now
          </Button>
        </Box>

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
          <Typography variant="body1">jimmredphotos@gmail.com</Typography>
          <Typography variant="body1">
            777 Boston st, Boston, MA, 02777
          </Typography>
        </Box>
      </Box>
    </Page>
  );
};

ServiceComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceComponent;
