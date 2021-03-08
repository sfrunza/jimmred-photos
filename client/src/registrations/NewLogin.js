import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Box,
  Container,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import validate from "validate.js";
import { useStateValue } from "src/StateProvider";
import { signIn, setLoading } from "src/UserAction";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {},
  alert: {
    marginBottom: "1em",
    color: "red",
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
    },
  },
};

const NewLogin = ({ history, handleLogin, loginStatus, open, ...rest }) => {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      email: "test@mail.ru",
      password: "111111",
    },
    touched: {},
    errors: {},
    showPassword: false,
  });
  const [{ message }, dispatch] = useStateValue();

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleClickShowPassword = () => {
    setFormState((formState) => ({
      ...formState,
      showPassword: !formState.showPassword,
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: formState.values.email,
      password: formState.values.password,
    };

    if (formState.isValid) {
      signIn(dispatch, user, history);
      setLoading(dispatch, false);
    }
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <Container maxWidth="sm" className={classes.root}>
      {!message ? null : (
        <div severity="error" className={classes.alert}>
          {message}
        </div>
      )}
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl
              variant="outlined"
              fullWidth
              error={hasError("email") ? true : false}
            >
              <InputLabel htmlFor="pass">Email</InputLabel>
              <OutlinedInput
                label="Email *"
                variant="outlined"
                size="medium"
                id="Email"
                name="email"
                onChange={handleChange}
                type={formState.showPassword ? "text" : "email"}
                value={formState.values.email || ""}
              />
              <FormHelperText id="pass">
                {hasError("email") ? formState.errors.email[0] : null}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              variant="outlined"
              fullWidth
              error={hasError("password") ? true : false}
            >
              <InputLabel htmlFor="pass">Password</InputLabel>
              <OutlinedInput
                label="Password *"
                variant="outlined"
                size="medium"
                id="pass"
                name="password"
                onChange={handleChange}
                type={formState.showPassword ? "text" : "password"}
                value={formState.values.password || ""}
                endAdornment={
                  !formState.values.password ? null : (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {formState.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              />
              <FormHelperText id="pass">
                {hasError("password") ? formState.errors.password[0] : null}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" mt={2}>
              <Button
                size="large"
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
                disableElevation
              >
                Log In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

NewLogin.propTypes = {
  history: PropTypes.object,
};

export default withRouter(NewLogin);
