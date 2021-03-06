import React from "react";
import * as Yup from "yup";
import { Formik, getIn } from "formik";
import { Box, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  flexConatiner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

function ContactForm({ formState, setFormState }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: formState.values.name || "",
        email: formState.values.email || "",
        subject: formState.values.subject || "",
        message: formState.values.message || "",
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
          setFormState({
            ...formState,
            values: {
              ...formState.values,
              name: values.name,
              email: values.email,
              subject: values.subject,
              message: values.message,
            },
          });
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
        // console.log(values);
        console.log(errors);
        return (
          <form onSubmit={handleSubmit} className={classes.root}>
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                error={
                  getIn(errors.name, "name") && getIn(touched.name, "name")
                }
                fullWidth
                label="Name"
                name="name"
                required
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  setFormState({
                    ...formState,
                    values: {
                      ...formState.values,
                      name: e.target.value,
                    },
                  });
                }}
                value={formState.values.name || ""}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                error={
                  getIn(errors.email, "email") && getIn(touched.email, "email")
                }
                fullWidth
                label="Email"
                name="email"
                required
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  setFormState({
                    ...formState,
                    values: {
                      ...formState.values,
                      email: e.target.value,
                    },
                  });
                }}
                value={formState.values.email || ""}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2} className={classes.flexConatiner}>
              <TextField
                error={
                  getIn(errors.subject, "subject") &&
                  getIn(touched.subject, "subject")
                }
                fullWidth
                label="Subject"
                name="subject"
                required
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  setFormState({
                    ...formState,
                    values: {
                      ...formState.values,
                      subject: e.target.value,
                    },
                  });
                }}
                value={formState.values.subject || ""}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box mt={2}>
              <TextField
                label="Message"
                error={
                  getIn(errors.message, "message") &&
                  getIn(touched.message, "message")
                }
                name="message"
                required
                onChange={(e) => {
                  handleChange(e);
                  setFormState({
                    ...formState,
                    values: {
                      ...formState.values,
                      message: e.target.value,
                    },
                  });
                }}
                onBlur={handleBlur}
                value={formState.values.message || ""}
                style={{ width: "100%" }}
                variant="outlined"
                multiline
                rows={4}
                size="small"
              />
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
