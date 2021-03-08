import React, { useState, useEffect } from "react";
import {
  IconButton,
  SvgIcon,
  TableCell,
  TableRow,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Save as SaveIcon, Trash2 as Trash2Icon } from "react-feather";
import { useStateValue } from "src/StateProvider";
import { removePhoto, editPhoto } from "src/PhotosAction";

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500,
  },
  image: {
    height: 110,
    width: "auto",
    objectFit: "contain",
  },
}));

const Body = ({ photo }) => {
  const classes = useStyles();
  const [{}, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName(photo.name);
    setPrice(photo.price);
  }, [photo]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDeletePhoto = (id) => {
    removePhoto(dispatch, id);
  };

  return (
    <TableRow hover key={photo.id}>
      <TableCell>
        <Typography variant="body1">{photo.id}.</Typography>
      </TableCell>
      <TableCell>
        <img src={photo.image.url} alt={photo.name} className={classes.image} />
      </TableCell>
      <TableCell>
        <TextField
          name="name"
          value={name}
          onChange={handleNameChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          name="price"
          value={price}
          onChange={handlePriceChange}
        ></TextField>
      </TableCell>
      <TableCell>{photo.likes}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() =>
            editPhoto(
              dispatch,
              {
                ...photo,
                name: name,
                price: price,
              },
              photo.id
            )
          }
          disabled={photo.name !== name || photo.price !== price ? false : true}
        >
          <SvgIcon fontSize="inherit">
            <SaveIcon
              color={
                photo.name !== name || photo.price !== price
                  ? "#4baf4f "
                  : "gray"
              }
            />
          </SvgIcon>
        </IconButton>
        <IconButton onClick={() => handleDeletePhoto(photo.id)}>
          <SvgIcon fontSize="inherit">
            <Trash2Icon color="red" />
          </SvgIcon>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Body;
