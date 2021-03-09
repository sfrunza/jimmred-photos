import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Camera as CameraIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  dragActive: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  list: {
    maxHeight: 320,
  },
  actions: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  button: {
    width: "100%",
  },
  buttonBox: {
    width: "100%",
  },
}));

function FilesDropzone({
  className,
  setFieldValue,
  handleSubmit,
  text,
  ...rest
}) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const convert = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const handleDrop = useCallback((acceptedFiles) => {
    handleImageUpload(acceptedFiles);
  }, []);

  async function handleImageUpload(acceptedFiles) {
    const imageFile = acceptedFiles[0];

    const options = {
      // maxSizeMB: 1,
      // maxWidthOrHeight: 1920,
      // useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      Object.assign(compressedFile, { path: imageFile.path });
      setFiles(imageFile);
      setFieldValue("image", imageFile);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveAll = () => {
    setFiles([]);
  };
  const handleFunction = () => {
    handleSubmit();
    handleRemoveAll();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box display="flex" alignItems="center" className={classes.buttonBox}>
          <Box display="flex">
            <CameraIcon />
          </Box>

          <Box flexGrow={1}>{text}</Box>
        </Box>
      </Button>
      {files.name !== undefined && (
        <>
          <div>
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={files.name}
                  primaryTypographyProps={{ variant: "body1" }}
                  secondary={convert(files.size)}
                />
              </ListItem>
              <ListItem disableGutters>
                <div className={classes.actions}>
                  <Button onClick={handleRemoveAll} size="small">
                    Remove
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    disableElevation
                    onClick={handleFunction}
                  >
                    Upload
                  </Button>
                </div>
              </ListItem>
            </List>
          </div>
        </>
      )}
    </div>
  );
}

FilesDropzone.propTypes = {
  className: PropTypes.string,
};

export default FilesDropzone;
