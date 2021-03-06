import React from "react";
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import PayPal from "./PayPal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

function Checkout({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SectionHeader title="Checkout" align="left" titleVariant="h4" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PayPal />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            All data is transmitted via a secure Transport Layer Security (TLS)
            connection
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "3rem" }}>
        <Grid item xs={12}>
          <SectionHeader
            title="Next Steps"
            align="left"
            titleVariant="h5"
            disableGutter
          />
        </Grid>
        <Divider style={{ width: "100%" }} />
        <Grid item xs={12} style={{ marginTop: 8 }}>
          <SectionHeader
            title="Delivery options"
            align="left"
            titleVariant="h6"
            subtitle="We will deliver the items to the address you indicate at checkout"
            disableGutter
          />
        </Grid>
        <Grid item xs={12}>
          <SectionHeader
            title="Payment information"
            align="left"
            titleVariant="h6"
            subtitle="Choose a payment method and enter your payment details."
            disableGutter
          />
        </Grid>
        <Grid item xs={12}>
          <SectionHeader
            title="Order Confirmation"
            align="left"
            titleVariant="h6"
            subtitle="Place an order and receive a onfirmation email."
            disableGutter
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
