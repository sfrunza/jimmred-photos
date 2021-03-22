import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box, Dialog } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import { useStateValue } from "src/StateProvider";
import { useCartContext } from "src/cart_context";
import { Link as RouterLink } from "react-router-dom";
import { formatPrice } from "src/components/FormatPrice";
import PayPal from "./PayPal";
import AWS from "aws-sdk";

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
  paper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

const ActionSection = ({ image }) => {
  const classes = useStyles();
  const [{}, dispatch] = useStateValue();
  const { addToCart, total_items } = useCartContext();
  const [amount, setAmount] = useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    addToCart(image.id, image.price, image.image, image.name, amount);
  };

  const s3 = new AWS.S3();
  AWS.config.update({
    apiVersion: "2010-12-01",
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY,
    region: process.env.REACT_APP_REGION,
    endpoint: process.env.REACT_APP_END_POINT,
  });

  const downloadImage = () => {
    let bucket = process.env.REACT_APP_BUCKET_NAME;
    let key = `uploads/photo/image/${image.id}/${image.filename}`;
    // let s3 = new AWS.S3({ params: { Bucket: bucket } });
    let params = { Bucket: bucket, Key: key };
    s3.getObject(params, (err, data) => {
      if (data) {
        let blob = new Blob([data.Body], { type: data.ContentType });
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = image.filename;
        link.click();
      }
    });
  };

  return (
    <div className={classes.root}>
      <SectionHeader
        title={image.name}
        align="left"
        subtitle={`Dimensions: ${image.dimensions}`}
        subtitle2={`Price: ${formatPrice(image.price)}`}
      />
      <Box>
        <Box mb={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            disableElevation
            onClick={handleClickOpen}
            // onClick={() => downloadImage()}
          >
            Download ({formatPrice(image.price)})
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            PaperProps={{
              className: classes.paper,
            }}
          >
            <PayPal image={image} downloadImage={downloadImage} />
          </Dialog>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disableElevation
          disabled
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
            //to="/checkout"
            //component={RouterLink}
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
