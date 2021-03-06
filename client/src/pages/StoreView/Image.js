import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box, Dialog } from "@material-ui/core";
// import HeroBackground from "src/components/HeroBackground";
import { Share as ShareIcon } from "react-feather";
import DialogView from "./DialogView";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { editPhoto } from "src/PhotosAction";
import { useStateValue } from "src/StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {},
  captionStyle: {
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "white",
    // fontSize: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    opacity: 0,
    // transitionDelay: "1s",
    zIndex: 1000,
    transition: "all 0.4s ease",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 2,
  },
  buyNow: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  buyButton: {
    color: "#fff",
    border: "1px solid",
    padding: theme.spacing(1, 5),
    borderRadius: 0,
  },
  likeCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: theme.spacing(3),
  },
  hoverHeart: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Image = ({ image, images, setChanged }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [{}, dispatch] = useStateValue();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLikes = (image, id) => {
    if (!liked) {
      editPhoto(
        dispatch,
        {
          ...image,
          likes: image.likes + 1,
        },
        image.id
      );
      setLiked(true);
    } else {
      editPhoto(
        dispatch,
        {
          ...image,
          likes: image.likes - 1,
        },
        image.id
      );
      setLiked(false);
    }
  };

  return (
    <div className="container">
      <img src={image.image.url} alt={image.image} />
      <div className={classes.captionStyle}>
        <Box flexGrow={1} className={classes.buyNow}>
          <Box mb={2}>
            <Typography variant="h4" color="inherit" className={classes.title}>
              {image.name}
            </Typography>
          </Box>
          <Button
            className={classes.buyButton}
            onClick={() => handleClickOpen()}
          >
            Buy Now
          </Button>
        </Box>
        <Box flexGrow={0} className={classes.likeCont}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => handleLikes(image, image.id)}
              className={classes.hoverHeart}
            >
              {liked ? (
                <AiFillHeart size={25} color="red" />
              ) : (
                <AiOutlineHeart size={25} />
              )}
            </div>

            <Box ml={1}>
              <Typography variant="h4" color="inherit">
                {image.likes}
              </Typography>
            </Box>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ShareIcon />
          </div>
        </Box>
      </div>
      <Dialog
        fullScreen
        className={classes.dialog}
        disableBackdropClick
        open={open}
        onClose={handleClose}
      >
        <DialogView image={image} images={images} setOpen={setOpen} />
      </Dialog>
    </div>
  );
};

export default Image;
