import React, { useEffect, useState, useCallback } from "react";
import Page from "src/components/Page";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
// import HeroBackground from "src/components/HeroBackground";
// import Gallery from "./Gallery";
import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";
import clsx from "clsx";
import GridGallery from "./GridGallery";
import axios from "axios";
import Header from "./Header";
import VideoSection from "./VideoSection";
import { useStateValue } from "src/StateProvider";
import Uploader from "src/components/Uploader";
import Feed from "react-instagram-authless-feed";
// import LoadingScreen from "src/components/LoadingScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  uploderContainer: {
    margin: "auto",
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 0),
    },
  },
  gallerySection: {
    padding: theme.spacing(0),
    maxWidth: 1400,
  },
  instagramSection: {
    padding: theme.spacing(0),
    maxWidth: 1400,
    marginTop: theme.spacing(10),
  },
  feed: {
    // width: 300,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // border: "1px solid",
    // borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    "& a": {
      width: 400,
      height: 300,
      padding: theme.spacing(2),
      border: "1px solid #80808073",
      borderRadius: 4,
      margin: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2),
      },
    },
    "&>a >img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  insta: {
    fontFamily: "Grand Hotel, cursive",
    textAlign: "center",
    fontSize: theme.spacing(7),
  },
}));

const HomeView = () => {
  const classes = useStyles();
  // const [images, setImages] = useState(null);
  const [{ photos, user }, dispatch] = useStateValue();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  // const getImages = useCallback(() => {
  //   axios.get("/api/v1/photos").then((response) => {
  //     // let images = response.data.filter((image) => image.job_id === 0);
  //     setImages(response.data);
  //   });
  //
  //   return () => {
  //     setImages(null);
  //   };
  // }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`/api/v1/images/${id}`)
  //     .then((response) => {
  //       const newList = images.filter((image) => image.id !== id);
  //       setImages(newList);
  //     })
  //     .catch((error) => {
  //       const result = error;
  //       // set error if has any
  //       console.log(result);
  //     });
  // };

  // useEffect(() => {
  //   getImages();
  // }, [getImages, JSON.stringify(images)]);
  //
  // if (!images) {
  //   return null;
  // }
  let images = photos.filter((photo) => photo.price === null);

  return (
    <Page title="Portfolio" className={classes.root}>
      <Header />
      <Section className={classes.section}>
        <VideoSection />
      </Section>
      {/*<Section className={classes.gallerySection}>
        <Grid item xs={12} md={8} className={classes.uploderContainer}>
          {user ? <Uploader text="Add photo" /> : null}
        </Grid>
        <GridGallery images={images} />
      </Section>*/}
      <Section className={classes.instagramSection}>
        <SectionHeader
          title="Instagram"
          disableGutter
          titleProps={{ className: classes.insta, variant: "h3" }}
        />
        <Feed
          userName="jimmredphotos"
          className={classes.feed}
          classNameLoading="Loading"
          limit="12"
        />
      </Section>
    </Page>
  );
};

export default HomeView;
