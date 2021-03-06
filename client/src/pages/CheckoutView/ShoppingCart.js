import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, makeStyles, Typography, Grid, Link } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import { useCartContext } from "src/cart_context";
import CheckoutItem from "src/layouts/MainLayout/CheckoutItem";
import { formatPrice } from "src/components/FormatPrice";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ShoppingCart({ className, ...rest }) {
  const classes = useStyles();
  const { cart, total_amount } = useCartContext();

  return (
    <div className={classes.root}>
      <SectionHeader
        title="Shopping Cart"
        align="left"
        subtitle={cart.length > 0 ? "Free shipping on oreders over $100" : null}
        titleVariant="h4"
      />
      {cart.length < 1 ? (
        <Grid container>
          <Link to="/store" component={RouterLink}>
            Go to Store
          </Link>
        </Grid>
      ) : (
        <>
          <Grid container>
            {cart.map((item, i) => {
              return <CheckoutItem item={item} key={i} />;
            })}
          </Grid>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mb={2}
          >
            <Box>
              <Typography variant="body1">Subtotal</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                {formatPrice(total_amount)}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mb={2}
          >
            <Box>
              <Typography variant="body1">Shipping</Typography>
            </Box>
            <Box>
              <Typography variant="body1">4-6 business days</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mb={2}
          >
            <Box>
              <Typography variant="h4">TOTAL</Typography>
            </Box>
            <Box>
              <Typography variant="h4"> {formatPrice(total_amount)}</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Typography variant="body2">Missing a photo?</Typography>
            <Typography variant="body2" style={{ marginLeft: 4 }}>
              <Link to="/store" component={RouterLink}>
                Continue Shopping
              </Link>
            </Typography>
          </Box>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
