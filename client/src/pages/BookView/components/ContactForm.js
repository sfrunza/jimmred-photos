import React from "react";
import * as Yup from "yup";
import { Formik, getIn } from "formik";
import {
  Box,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "react-feather";
import axios from "axios";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  flexConatiner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
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

function ContactForm({ formState, setFormState, onBack, setCompleted }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: formState.values.name || "",
        email: formState.values.email || "",
        message: formState.values.message || "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().min(3, "Must be at least 3").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().required("Required"),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          axios.post("/api/v1/events", {
            ...formState.values,
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          });
          setCompleted(true);
          window.scroll(0, 0);
          resetForm();
          resetForm();
          setStatus({ success: true });
          setTimeout(function () {
            setStatus({ success: false });
          }, 3000);
        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        resetForm,
        status,
      }) => {
        return (
          <div>
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
                <Typography variant="body2">
                  1h | Introductory Meeting
                </Typography>
                <Box mt={2}>
                  {formState.values.date ? (
                    <Typography variant="body1">
                      {formState.values.date}
                    </Typography>
                  ) : null}
                  {formState.values.time ? (
                    <Typography variant="body1">
                      {moment(formState.values.time, "HH:mm:ss").format(
                        "hh:mm a"
                      )}
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
                    onClick={() => handleSubmit()}
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
                <form onSubmit={handleSubmit} className={classes.root}>
                  <Box mt={6} className={classes.flexConatiner}>
                    <TextField
                      error={errors.name ? true : false}
                      fullWidth
                      label="Name"
                      name="name"
                      required
                      onChange={handleChange}
                      value={values.name || ""}
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box mt={2} className={classes.flexConatiner}>
                    <TextField
                      error={errors.email ? true : false}
                      fullWidth
                      label="Email"
                      name="email"
                      required
                      onChange={handleChange}
                      value={values.email || ""}
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box mt={2}>
                    <TextField
                      label="Message"
                      error={errors.message ? true : false}
                      name="message"
                      required
                      onChange={handleChange}
                      value={values.message || ""}
                      style={{ width: "100%" }}
                      variant="outlined"
                      multiline
                      rows={4}
                      size="small"
                    />
                  </Box>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
