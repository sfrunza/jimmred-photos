import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { useStateValue } from "src/StateProvider";
import CheckoutItem from "./CheckoutItem";
import { useCartContext } from "src/cart_context";
import { formatPrice } from "src/components/FormatPrice";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.grey[200],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "90%",
    margin: "auto",
    marginTop: theme.spacing(3),
  },
  wrapper: {},
}));

const CheckoutList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [{}, dispatch] = useStateValue();
  const { cart, total_amount } = useCartContext();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container>
        {cart.map((item, i) => {
          return <CheckoutItem item={item} key={i} />;
        })}
      </Grid>
      <Grid item className={classes.wrapper}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          mb={2}
        >
          <Box>
            <Typography variant="h5">Subtotal</Typography>
          </Box>
          <Box>
            <Typography variant="h3">{formatPrice(total_amount)}</Typography>
          </Box>
        </Box>
        <Box mb={5}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disableElevation
            disableRipple
            component={RouterLink}
            to="/checkout"
            onClick={() => {
              dispatch({
                type: "SET_OPEN",
                payload: false,
              });
            }}
            disabled={cart.length < 1 ? true : false}
          >
            checkout
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

CheckoutList.propTypes = {
  className: PropTypes.string,
};

export default CheckoutList;
