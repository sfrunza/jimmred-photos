import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NewLogin from "./NewLogin";
import Page from "src/components/Page";
import SectionHeader from "src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    maxWidth: 450,
    margin: "40px auto",
  },
  section: {
    padding: theme.spacing(10, 4),
  },
  header: {
    marginTop: 100,
  },
}));

const SignInPage = ({ loginStatus, handleLogin, history, setOpen, open }) => {
  const classes = useStyles();

  return (
    <Page title="Login " className={classes.root}>
      <div className={classes.section}>
        <SectionHeader
          title="Log in"
          align="center"
          titleVariant="h4"
          className={classes.header}
        />
        <div className={classes.formContainer}>
          <NewLogin
            handleLogin={handleLogin}
            history={history}
            loginStatus={loginStatus}
            open={open}
          />
        </div>
      </div>
    </Page>
  );
};

export default SignInPage;
