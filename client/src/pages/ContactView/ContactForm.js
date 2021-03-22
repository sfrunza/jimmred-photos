import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import * as Yup from "yup";
import axios from "axios";
import { Formik, getIn } from "formik";
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  addTab: {
    marginLeft: theme.spacing(2),
  },
  tag: {
    "& + &": {
      marginLeft: theme.spacing(1),
    },
  },
  datePicker: {
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  editor: {
    "& .ql-editor": {
      height: 200,
    },
  },
  flexConatiner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  flexItem: {
    flex: "0 0 47%",
  },
  flexItemSecond: {
    flex: "0 0 47%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "32px",
    },
  },
  submitContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submitText: {
    color: "#259829",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  button: {
    // borderRadius: 24,
  },
}));

function ContactForm({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().min(3, "Must be at least 3").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        subject: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          var user = values;
          axios.post("/api/v1/events", values);
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
          <form
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                error={getIn(errors, "name") && getIn(touched, "name")}
                fullWidth
                label="Name*"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                error={getIn(errors, "email") && getIn(touched, "email")}
                fullWidth
                label="Email*"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                fullWidth
                label="Subject*"
                error={getIn(errors, "subject") && getIn(touched, "subject")}
                name="subject"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subject}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2}>
              <TextField
                label="Message*"
                error={getIn(errors, "message") && getIn(touched, "message")}
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                style={{ width: "100%" }}
                variant="outlined"
                multiline
                rows={4}
                size="small"
              />
            </Box>

            <Box mt={2} mb={1} display="flex" alignItems="center">
              <Box>
                {status && status.success ? (
                  <Typography variant="h6" className={classes.submitText}>
                    Message sent!
                  </Typography>
                ) : null}
              </Box>
              <Box flexGrow={1}></Box>

              <Box>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  size="medium"
                  className={classes.button}
                  disableElevation
                  disableRipple
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
