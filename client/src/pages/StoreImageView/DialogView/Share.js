import React, { useState } from "react";
import {
  Container,
  Typography,
  makeStyles,
  Paper,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useSnackbar } from "notistack";
import { X as XIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "200px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  linkBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000",
  },
  link: {
    flex: 1,
    textAlign: "center",
  },
  linkIcon: {
    alignItems: "center",
    display: "flex",
    backgroundColor: "#000",
    padding: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
    },
  },
  paddingBox: {
    padding: theme.spacing(0, 4, 4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2, 2),
    },
  },
  closeButtonBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
}));

const Share = ({ history, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [copy, setCopy] = useState(false);

  const CopyToClipBoard = (text) => {
    if (navigator.clipboard != undefined) {
      //Chrome
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    } else if (window.clipboardData) {
      // Internet Explorer
      window.clipboardData.setData("Text", text);
    }
  };
  console.log(window.location.href);

  return (
    <>
      <DialogTitle
        id="alert-dialog-title"
        disableTypography
        className={classes.closeButtonBox}
      >
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <XIcon color="#000" />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent className={classes.paddingBox}>
        <DialogContentText id="alert-dialog-description">
          Share with others
        </DialogContentText>
        <Box id="alert-dialog-description">
          <Box
            className={classes.linkBox}
            onClick={() => {
              CopyToClipBoard(window.location.href);
              setCopy(true);
              enqueueSnackbar("Link Copied to Clipboard", {
                variant: "info",
                preventDuplicate: true,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              });
            }}
          >
            <Typography
              varinat="body1"
              component="div"
              className={classes.link}
            >
              {window.location.href}
            </Typography>
            <Box className={classes.linkIcon}>
              {!copy ? (
                <FiCopy size="25" color="white" strokeWidth="1.3" />
              ) : (
                <FiCheck size="25" color="white" strokeWidth="1.3" />
              )}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </>
  );
};

export default Share;
