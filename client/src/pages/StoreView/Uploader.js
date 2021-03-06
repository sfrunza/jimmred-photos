import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  makeStyles,
} from "@material-ui/core";
import FilesDropzone from "src/components/FilesDropzone";
import { useStateValue } from "src/StateProvider";

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
  },
  buttonCamera: {
    width: "100%",
  },
  cardItem: {
    width: "100%",
    maxWidth: "300px",
    marginTop: "2rem",
  },
}));

function Uploader() {
  const classes = useStyles();
  // const { enqueueSnackbar } = useSnackbar();
  const [{}, dispatch] = useStateValue();
  return (
    <Formik
      initialValues={{
        photo: null,
        image: "",
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          const formData = new FormData();
          formData.append("image", values.image);
          formData.append("photo", values.photo);

          fetch("/api/v1/images.json", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              dispatch({
                type: "ADD_IMAGE",
                images: data,
              });
            })
            .catch((error) => console.log(error));

          resetForm({});

          setStatus({ success: true });
          setSubmitting(false);
          // enqueueSnackbar('Image Added', {
          //   variant: 'success'
          // });
        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values,
      }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.root}>
            <Grid className={classes.buttonCamera}>
              <Card className={classes.card}>
                <CardContent className={classes.cardItem}>
                  <FilesDropzone
                    setFieldValue={setFieldValue}
                    handleSubmit={handleSubmit}
                    text="Add Photo"
                  />
                </CardContent>
              </Card>
            </Grid>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </form>
        );
      }}
    </Formik>
  );
}

Uploader.propTypes = {
  className: PropTypes.string,
};

export default Uploader;
