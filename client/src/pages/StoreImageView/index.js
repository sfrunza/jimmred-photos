import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import DialogView from "./DialogView";
import { useStateValue } from "src/StateProvider";

const StoreImageView = (props) => {
  const [photo, setPhoto] = useState(null);
  const [path, setPath] = useState(props.match.params.id);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
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
    if (currentId + 1 > filteredPhotos.length - 1) {
      setCurrentId(0);
      setPath(filteredPhotos[0].id);
      props.history.push(`/store/${filteredPhotos[0].id}`);
    } else {
      setCurrentId(currentId + 1);
      setPath(filteredPhotos[currentId + 1].id);
      props.history.push(`/store/${filteredPhotos[currentId + 1].id}`);
    }
  };
  const onPrev = () => {
    if (currentId - 1 < 0) {
      setCurrentId(filteredPhotos.length - 1);
      setPath(filteredPhotos[filteredPhotos.length - 1].id);
      props.history.push(
        `/store/${filteredPhotos[filteredPhotos.length - 1].id}`
      );
    } else {
      setCurrentId(currentId - 1);
      setPath(filteredPhotos[currentId - 1].id);
      props.history.push(`/store/${filteredPhotos[currentId - 1].id}`);
    }
  };

  useEffect(() => {
    getPhoto();
    setFilteredPhotos(photos.filter((photo) => photo.price != null));
    if (photo) {
      setCurrentId(filteredPhotos.findIndex((x) => x.id === photo.id));
    }
  }, [getPhoto, path, JSON.stringify(photo)]);

  if (!photo) {
    return null;
  }
  console.log(photo);

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
