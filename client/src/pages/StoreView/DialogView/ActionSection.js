import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import { useStateValue } from "src/StateProvider";
import { useCartContext } from "src/cart_context";
import { Link as RouterLink } from "react-router-dom";
import { formatPrice } from "src/components/FormatPrice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  checkout: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const ActionSection = ({ image }) => {
  const classes = useStyles();
  const [{}, dispatch] = useStateValue();
  const { addToCart, total_items } = useCartContext();
  const [amount, setAmount] = useState(1);

  const handleClick = () => {
    addToCart(image.id, image.price, image.image, image.name, amount);
  };

  return (
    <div className={classes.root}>
      <SectionHeader
        title={image.name}
        align="left"
        subtitle={`Price: ${formatPrice(image.price)}`}
      />
      <Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disableElevation
          onClick={() => {
            handleClick();
            dispatch({
              type: "SET_OPEN",
              payload: true,
            });
          }}
        >
          Add to cart
        </Button>
        <Box mt={3} justifyContent="center" display="flex">
          <Typography
            variant="body1"
            to="/checkout"
            component={RouterLink}
            className={classes.checkout}
          >
            Continue to Checkout (<strong>{total_items}</strong>)
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ActionSection;
