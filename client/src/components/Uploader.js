import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Card,
  FormHelperText,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import FilesDropzone from "src/components/FilesDropzone";
import { useSnackbar } from "notistack";
import { addPhoto } from "src/PhotosAction";
import { useStateValue } from "src/StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  buttonCamera: {
    width: "100%",
  },
  cardItem: {
    width: "100%",
  },
}));

function Uploader({ setImages, images, text }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [{}, dispatch] = useStateValue();

  return (
    <Formik
      initialValues={{
        image: null,
        name: "",
        price: "",
        likes: 1,
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          const formData = new FormData();
          formData.append("image", values.image);
          formData.append("name", values.name);
          formData.append("price", values.price);
          formData.append("likes", values.likes);

          addPhoto(dispatch, formData, values);

          resetForm({});

          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar("Image Added", {
            variant: "success",
          });
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
        console.log(values);
        return (
          <form onSubmit={handleSubmit} className={classes.root}>
            <Grid className={classes.buttonCamera}>
              <Card className={classes.card}>
                <Grid
                  container
                  display="flex"
                  spacing={2}
                  alignItems="flex-end"
                >
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                      size="small"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="price"
                      name="price"
                      label="Price"
                      type="number"
                      size="small"
                      value={values.price}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <FilesDropzone
                      setFieldValue={setFieldValue}
                      handleSubmit={handleSubmit}
                      text={text}
                    />
                  </Grid>
                </Grid>
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
