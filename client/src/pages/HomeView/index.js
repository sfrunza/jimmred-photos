import React, { useEffect, useState, useCallback } from "react";
import Page from "src/components/Page";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
// import HeroBackground from "src/components/HeroBackground";
// import Gallery from "./Gallery";
// import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";
import clsx from "clsx";
// import GridGallery from "./GridGallery";
import axios from "axios";
import Header from "./Header";
import VideoSection from "./VideoSection";
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
}));

const HomeView = () => {
  const classes = useStyles();
  const [images, setImages] = useState(null);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const getImages = useCallback(() => {
    axios.get("/photos").then((response) => {
      // let images = response.data.filter((image) => image.job_id === 0);
      setImages(response.data);
    });

    return () => {
      setImages(null);
    };
  }, []);

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

  useEffect(() => {
    getImages();
  }, [getImages, JSON.stringify(images)]);

  // if (!images) {
  //   return null;
  // }

  return (
    <Page title="Portfolio" className={classes.root}>
      <Header />
      <Section className={clsx(classes.pagePaddingTop, classes.section)}>
        <VideoSection />
        {/*<GridGallery images={images} handleDelete={handleDelete} />*/}
      </Section>
    </Page>
  );
};

export default HomeView;
