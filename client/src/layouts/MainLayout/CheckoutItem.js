import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import { X as XIcon } from "react-feather";
import { useCartContext } from "src/cart_context";
import { formatPrice } from "src/components/FormatPrice";
import AmountButtons from "./AmountButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  image: {
    width: "7rem",
    height: "7rem",
    objectFit: "cover",
  },
  mainContainer: {
    display: "flex",
  },
  button: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const CheckoutItem = ({ item }) => {
  const classes = useStyles();
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(item.id, "inc");
  };
  const decrease = () => {
    toggleAmount(item.id, "dec");
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} className={classes.mainContainer}>
        <Box>
          <img src={item.image.url} className={classes.image} alt={item.name} />
        </Box>

        <Box display="flex" flexDirection="column" flexGrow={1} pl={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">{item.name}</Typography>
            <Typography
              variant="button"
              onClick={() => removeItem(item.id)}
              className={classes.button}
            >
              <XIcon size={20} strokeWidth="1" />
            </Typography>
          </Box>
          <Box>
            <Box>
              <Box>
                <Typography variant="body2">
                  Price: {formatPrice(item.price)}
                </Typography>
              </Box>
              <Box display="flex" mt={2}>
                <Typography variant="body2">Qty:</Typography>
                <AmountButtons
                  amount={item.amount}
                  increase={increase}
                  decrease={decrease}
                />
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Subtotal( <strong>{item.amount}</strong>{" "}
                  {item.amount > 1 ? "items" : "item"})
                </Typography>
                <Typography variant="body2">
                  {formatPrice(item.amount * item.price)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Box mt={3} mb={3}>
        <Divider />
      </Box>
    </div>
  );
};

export default CheckoutItem;
