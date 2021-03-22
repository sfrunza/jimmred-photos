import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  Box,
  makeStyles,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Gallery from "react-grid-gallery";
// import withWidth from "@material-ui/core/withWidth";
// import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "src/StateProvider";
// import { deleteImage } from "src/ImagesAction";
// import LoadingScreen from "src/components/LoadingScreen";
// import ResponsiveGallery from "react-responsive-gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(5, 0),
    // // maxWidth: '900px',
    // margin: 'auto'
    display: "grid",
  },
  imageStyle: {
    // padding: '2px',
    // transition: 'transform .2s',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '2px'
    // },
  },
  deleteButton: {
    // padding: theme.spacing(1),
    alignItems: "center",
  },
  lightbox: {
    position: "fixed",
    inset: 0,
    backgroundColor: "transparent",
  },
}));

function GridGallery({ images }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [{ user }] = useStateValue();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  let arr = [];
  if (images) {
    images.map((image) => {
      arr.push({
        src: image.image.url,
        thumbnailWidth: isMd ? 4 : 6,
        thumbnailHeight: 3,
        thumbnail: image.image.url,
        id: image.id,
        alt: image.name,
        nano: "https://www.urbansplash.co.uk/images/placeholder-1-1.jpg",
      });
      return null;
    });
  }

  const onCurrentImageChange = (id) => {
    setCurrentImage(id);
  };

  let id = arr.length !== 0 ? arr[arr.length - 1].id : 0;
  arr.map((image) => {
    if (currentImage === arr.indexOf(image)) {
      id = image.id;
    }
    return null;
  });

  if (!images) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Box mt={2}>
        <Gallery
          images={arr}
          enableLightbox
          enableImageSelection={false}
          rowHeight={isMd ? 350 : 380}
          currentImageWillChange={onCurrentImageChange}
          backdropClosesModal={true}
          margin={12}
          thumbnailStyle={() => {
            let st = {
              cursor: "pointer",
              width: "100%",
              height: "100%",
              marginTop: 0,
              objectFit: "cover",
              ":hover": {
                opacity: 0.5,
              },
            };
            return st;
          }}
          customControls={
            user && user.admin
              ? [
                  <Button
                    key="deleteImage"
                    color="secondary"
                    size="small"
                    className={classes.deleteButton}
                    startIcon={<DeleteIcon />}
                    disableElevation
                  >
                    Delete
                  </Button>,
                ]
              : null
          }
        />
      </Box>
    </div>
  );
}

export default GridGallery;
