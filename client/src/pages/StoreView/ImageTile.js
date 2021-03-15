import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Button, Box, Tooltip } from "@material-ui/core";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { editPhoto } from "src/PhotosAction";
import { useStateValue } from "src/StateProvider";
import { Link as RouterLink } from "react-router-dom";
import AWS from "aws-sdk";

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
    padding: theme.spacing(1),
  },
  hoverHeart: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  btnPadding: {
    // padding: 0,
  },
}));
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    marginBottom: 4,
  },
}))(Tooltip);

const ImageTile = ({ image }) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const [{}, dispatch] = useStateValue();

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
      if (!err) {
        let blob = new Blob([data.Body], { type: data.ContentType });
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = image.filename;
        link.click();
      }
    });
  };
  var newImage = new Image();
  newImage.src = image.image.url + "?t=" + new Date().getTime();

  return (
    <div className="container">
      <img
        src={image.image.url}
        alt={image.name}
        style={{ pointerEvents: "none" }}
        // crossOrigin="anonymous"
      />
      <div className={classes.captionStyle}>
        <Box flexGrow={1} className={classes.buyNow}>
          <Box mb={2}>
            <Typography variant="h4" color="inherit" className={classes.title}>
              {image.name}
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to={`/store/${image.id}`}
            className={classes.buyButton}
          >
            View Photo
          </Button>
        </Box>
        <Box flexGrow={0} className={classes.likeCont}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => handleLikes(image, image.id)}
              className={classes.hoverHeart}
            >
              {liked ? (
                <LightTooltip title="Unlike" placement="top">
                  <Button className={classes.btnPadding}>
                    <AiFillHeart size={25} color="red" />
                  </Button>
                </LightTooltip>
              ) : (
                <LightTooltip title="Like" placement="top">
                  <Button className={classes.btnPadding}>
                    <AiOutlineHeart size={25} color="#fff" />
                  </Button>
                </LightTooltip>
              )}
            </div>

            <Box ml={-1}>
              <Typography variant="h4" color="inherit">
                {image.likes}
              </Typography>
            </Box>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LightTooltip title="Download" placement="top">
              {/*<RouterLink to={url} target="_blank" download>
                Download
              </RouterLink>*/}
              {/*<a rel="nofollow" download target="_blank" href={url}>
                <span>Download</span>
              </a>*/}
              <Button className={classes.btnPadding}>
                <FiDownload
                  size={25}
                  color="#fff"
                  onClick={() => downloadImage()}
                />
              </Button>
            </LightTooltip>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ImageTile;
