import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import SectionHeader from "src/components/SectionHeader";
import Image from "./Image";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const ImagesList = ({ images, setChanged, changed }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {images.map((image) => {
          return (
            <Grid item xs={12} md={4} key={image.id}>
              <Image
                image={image}
                images={images}
                setChanged={setChanged}
                changed={changed}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ImagesList;
