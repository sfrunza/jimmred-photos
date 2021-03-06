import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  colors,
  Grid,
  useMediaQuery,
  Box,
  Typography,
} from "@material-ui/core";
import Page from "src/components/Page";
import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";
import ContactForm from "./ContactForm";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    minHeight: 400,
    maxHeight: 600,
    marginTop: 74,
    background: `url("https://static.wixstatic.com/media/a38016_06297691cb8b4c34895a188f45151984.jpg/v1/fill/w_2698,h_1964,al_t,q_90,usm_0.66_1.00_0.01/a38016_06297691cb8b4c34895a188f45151984.webp") no-repeat center ${colors.blueGrey[200]}`,
    backgroundSize: "cover",

    // [theme.breakpoints.down("xs")]: {
    //   flex: 1,
    // },

    [theme.breakpoints.up("md")]: {
      minHeight: "90vh",
    },
  },
  section: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // display: "flex",
    // justifyContent: "flex-end",
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  textWhite: {
    color: "white",
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 4,
    width: "100%",
    height: "100%",
    alignItems: "center",

    background: "white",
    padding: theme.spacing(3, 7),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    [theme.breakpoints.down("md")]: {
      boxShadow: "none",
      padding: theme.spacing(3),
    },
  },
  input: {
    background: "white",
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },
}));

const ContactView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Page title="Contact">
      {isMd ? (
        <div className={classes.root}>
          <Section className={classes.section}>
            <Grid item container justify="center" xs={12} sm={12} md={5}>
              <div className={classes.aboutContainer}>
                <SectionHeader
                  title="Get in touch"
                  subtitleVariant="h5"
                  disableGutter
                  subtitle={
                    <Box>
                      <Box>
                        <Typography variant="h6">Email</Typography>
                        <Typography variant="subtitle2">
                          jimmredphotos@gmail.com
                        </Typography>
                      </Box>
                      <Box mt={3}>
                        <Typography variant="h6">Phone</Typography>
                        <Typography variant="subtitle2">
                          123-123-1234
                        </Typography>
                      </Box>
                    </Box>
                  }
                  align="left"
                />
                <ContactForm />
              </div>
            </Grid>
          </Section>
        </div>
      ) : (
        <>
          <div className={classes.root}></div>
          <Section className={classes.section}>
            <Grid item container justify="center" xs={12} sm={12} md={5}>
              <div className={classes.aboutContainer}>
                <SectionHeader
                  title="Get in touch"
                  subtitleVariant="h5"
                  disableGutter
                  subtitle={
                    <Box>
                      <Box>
                        <Typography variant="h6">Email</Typography>
                        <Typography variant="subtitle2">
                          jimmredphotos@gmail.com
                        </Typography>
                      </Box>
                      <Box mt={3}>
                        <Typography variant="h6">Phone</Typography>
                        <Typography variant="subtitle2">
                          123-123-1234
                        </Typography>
                      </Box>
                    </Box>
                  }
                  align="left"
                />
                <ContactForm />
              </div>
            </Grid>
          </Section>
        </>
      )}
    </Page>
  );
};

export default ContactView;
