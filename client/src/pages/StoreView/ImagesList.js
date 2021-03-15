import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useStateValue } from "src/StateProvider";
import ImageTile from "./ImageTile";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const ImagesList = () => {
  const classes = useStyles();
  const [{ photos }] = useStateValue();

  if (!photos) {
    return <div>Loading</div>;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {photos.map((image) => {
          return (
            <Grid item xs={12} md={4} key={image.id}>
              <ImageTile image={image} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ImagesList;
