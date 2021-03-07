import React, { useState } from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "src/StateProvider";
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
  const [{ photos }] = useStateValue();
  const [changed, setChanged] = useState(false);

  return (
    <Page title="Store" className={classes.root}>
      <Section>
        <SectionHeader title="Store" align="center" />
        {photos && (
          <ImagesList
            images={photos}
            setChanged={setChanged}
            changed={changed}
          />
        )}
      </Section>
    </Page>
  );
};

export default StoreView;
