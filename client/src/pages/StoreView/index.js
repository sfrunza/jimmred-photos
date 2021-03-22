import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";

import ImagesList from "./ImagesList";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    marginTop: 74,
  },
  section: {
    // maxWidth: 1300,
    // [theme.breakpoints.up("md")]: {
    //   padding: theme.spacing(12, 0),
    // },
  },
}));

const StoreView = () => {
  const classes = useStyles();

  return (
    <Page title="Store" className={classes.root}>
      <Section className={classes.section}>
        <SectionHeader title="Store" align="center" />
        <ImagesList />
      </Section>
    </Page>
  );
};

export default StoreView;
