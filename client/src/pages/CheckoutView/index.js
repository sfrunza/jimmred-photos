import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Page from "src/components/Page";
import Section from "src/components/Section";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    marginTop: 74,
  },
}));

const CheckoutView = (props) => {
  const classes = useStyles();

  return (
    <Page title="Checkout">
      <div className={classes.root}>
        <Section>
          <Grid container spacing={10}>
            <Grid container item xs={12} md={5}>
              <ShoppingCart />
            </Grid>
            <Grid container item xs={12} md={7}>
              <Checkout />
            </Grid>
          </Grid>
        </Section>
      </div>
    </Page>
  );
};

export default CheckoutView;
