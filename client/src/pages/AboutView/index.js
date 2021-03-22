import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { colors, Grid, useMediaQuery } from "@material-ui/core";
import Page from "src/components/Page";
import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    minHeight: 400,
    maxHeight: 600,
    marginTop: 74,
    background: `url("https://instagram.fnyc1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/124376475_1000602637016995_6382279792491551387_n.jpg?tp=1&_nc_ht=instagram.fnyc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Qaw66zzeXiIAX8zKF2Z&ccb=7-4&oh=ae2422c3a3fc6b8ce2e23e47c4eacaab&oe=607E8123&_nc_sid=4f375e") no-repeat center ${colors.blueGrey[200]}`,
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      minHeight: "90vh",
    },
  },
  section: {
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
  aboutContainer: {
    background: "white",
    padding: theme.spacing(3, 7),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    [theme.breakpoints.down("md")]: {
      boxShadow: "none",
      padding: theme.spacing(3),
    },
    borderRadius: 4,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

const AboutView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Page title="About">
      {isMd ? (
        <div className={classes.root}>
          <Section className={classes.section}>
            <Grid item container justify="center" xs={12} sm={12} md={5}>
              <div className={classes.aboutContainer}>
                <SectionHeader
                  title="About me"
                  subtitle={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​`}
                  align="left"
                  subtitle2="This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are."
                  disableGutter
                />
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
                  title="About me"
                  subtitle={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​`}
                  align="left"
                  subtitle2="This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are."
                  disableGutter
                />
              </div>
            </Grid>
          </Section>
        </>
      )}
    </Page>
  );
};

export default AboutView;
