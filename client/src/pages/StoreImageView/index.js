import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useIsMountedRef from "src/components/useIsMountedRef";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Box,
  Tooltip,
  Link,
  Dialog,
  Container,
} from "@material-ui/core";
import DialogView from "./DialogView";
import { useStateValue } from "src/StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const StoreImageView = (props) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [photo, setPhoto] = useState(null);
  const [path, setPath] = useState(props.match.params.id);
  const [open, setOpen] = useState(true);
  const [{ photos }, dispatch] = useStateValue();
  const [currentId, setCurrentId] = useState(null);

  const handleClose = () => {
    props.history.push("/store");
  };

  const getPhoto = useCallback(() => {
    axios.get(`/api/v1/photos/${path}`).then((resp) => {
      setPhoto(resp.data);
    });
  }, [path]);

  const onNext = () => {
    if (currentId + 1 > photos.length - 1) {
      setCurrentId(0);
      setPath(photos[0].id);
      props.history.push(`/store/${photos[0].id}`);
    } else {
      setCurrentId(currentId + 1);
      setPath(photos[currentId + 1].id);
      props.history.push(`/store/${photos[currentId + 1].id}`);
    }
  };
  const onPrev = () => {
    if (currentId - 1 < 0) {
      setCurrentId(photos.length - 1);
      setPath(photos[photos.length - 1].id);
      props.history.push(`/store/${photos[photos.length - 1].id}`);
    } else {
      setCurrentId(currentId - 1);
      setPath(photos[currentId - 1].id);
      props.history.push(`/store/${photos[currentId - 1].id}`);
    }
  };

  useEffect(() => {
    getPhoto();
    if (photo) {
      setCurrentId(photos.findIndex((x) => x.id === photo.id));
    }
  }, [getPhoto, path, JSON.stringify(photo)]);

  if (!photo) {
    return null;
  }

  return (
    <Container maxWidth={false} disableGutters>
      <DialogView
        photo={photo}
        handleClose={handleClose}
        setPath={setPath}
        history={props.history}
        onNext={onNext}
        onPrev={onPrev}
      />
    </Container>
  );
};

export default StoreImageView;
