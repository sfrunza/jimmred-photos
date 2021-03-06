import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "react-feather";
import ContactForm from "./components/ContactForm";
import axios from "axios";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrap: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  aside: {
    width: "100%",
    marginTop: theme.spacing(5),

    [theme.breakpoints.up("md")]: {
      float: "right",
      width: "25%",
      padding: "1em",
      position: "sticky",
      top: "20em",
    },
  },
  content: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      width: "70%",
      minHeight: "60vh",
      marginTop: theme.spacing(5),
    },
  },
}));

function Contact({
  className,
  onBack,
  onNext,
  setFormState,
  formState,
  setCompleted,
  ...rest
}) {
  const classes = useStyles();
  console.log(formState);

  const handleSubmit = () => {
    axios.post("/api/v1/events", formState.values).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {onBack && (
        <Button
          onClick={() => onBack(1)}
          size="medium"
          color="primary"
          disableFocusRipple
          disableRipple
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>
      )}

      <div className={classes.wrap}>
        <aside className={classes.aside}>
          <Typography gutterBottom variant="h4">
            {formState.values.service}
          </Typography>
          <Typography variant="body2">1h | Introductory Meeting</Typography>
          <Box mt={2}>
            {formState.values.date ? (
              <Typography variant="body1">{formState.values.date}</Typography>
            ) : null}
            {formState.values.time ? (
              <Typography variant="body1">
                {moment(formState.values.time, "HH:mm:ss").format("hh:mm a")}
              </Typography>
            ) : null}
          </Box>
          <Box mt={4}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              disableElevation
              fullWidth
              disableRipple
              onClick={() => {
                handleSubmit();
                setCompleted(true);
                window.scroll(0, 0);
              }}
            >
              Book it
            </Button>
          </Box>
        </aside>
        <div className={classes.content}>
          <Typography variant="h3">Add Your Info</Typography>
          <Box mt={2}>
            <Typography variant="body1">
              Tell us a bit about yourself
            </Typography>
          </Box>

          <Box mt={6}>
            <ContactForm formState={formState} setFormState={setFormState} />
          </Box>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  className: PropTypes.string,
  onComplete: PropTypes.func,
  onBack: PropTypes.func,
};

export default Contact;
