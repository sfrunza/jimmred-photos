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
}));

const StoreView = () => {
  const classes = useStyles();

  return (
    <Page title="Store" className={classes.root}>
      <Section>
        <SectionHeader title="Store" align="center" />
        <ImagesList />
      </Section>
    </Page>
  );
};

export default StoreView;
