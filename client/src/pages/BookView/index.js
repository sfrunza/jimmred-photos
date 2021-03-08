import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Page from "src/components/Page";
import ContactForm from "./components/ContactForm";
import ServiceSelect from "./ServiceSelect";
import DaySelect from "./DaySelect";
import ServiceComponent from "./components/ServiceComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  paddingMobile: {
    marginTop: "1em",
    marginBottom: "2em",
    padding: "0px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      marginTop: "2em",
      marginBottom: "4em",
    },
  },
  itemsContainer: {
    flexDirection: "column",
    alignContent: "center",
    // maxWidth: "747px",
    margin: "auto",
    // padding: "2em 0em",
  },
  item: {
    width: "100%",
    maxWidth: "100%",
  },
  alert: {
    fontSize: "16px",
  },
  borderRadius: {
    borderRadius: 4,
  },
}));

function BookView(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formState, setFormState] = useState({
    values: {},
  });

  useEffect(() => {
    setFormState((formState) => ({
      ...formState,
    }));
  }, [formState.values]);

  const handleNext = (steps) => {
    setActiveStep((prevActiveStep) => prevActiveStep + steps);
    window.scroll(0, 0);
  };

  const handleBack = (steps) => {
    setActiveStep((prevActiveStep) => prevActiveStep - steps);
    window.scroll(0, 0);
  };

  return (
    <Page className={classes.root} title="Book">
      <Container
        maxWidth={activeStep === 1 ? "xl" : "md"}
        className={classes.paddingMobile}
      >
        <Box mb={7}></Box>
        {!completed ? (
          <div className={classes.borderRadius}>
            <Grid container className={classes.itemsContainer}>
              <Grid item xs={12} md={9} className={classes.item}>
                <Box p={activeStep === 1 ? 0 : 3}>
                  {activeStep === 0 && (
                    <ServiceSelect
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                      history={props.history}
                      onBack={handleBack}
                    />
                  )}
                  {activeStep === 1 && (
                    <ServiceComponent
                      onBack={handleBack}
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                    />
                  )}
                  {activeStep === 2 && (
                    <DaySelect
                      onBack={handleBack}
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                    />
                  )}

                  {activeStep === 3 && (
                    <ContactForm
                      onBack={handleBack}
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                      setCompleted={setCompleted}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </div>
        ) : (
          <Grid>
            <div>
              <Box maxWidth={450} m="auto">
                <Box mt={2}>
                  <Typography variant="h3" color="textPrimary" align="center">
                    Your session is booked!
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    <div severity="info" className={classes.alert}>
                      {`See you on ${formState.values.date} at ${formState.values.time} `}
                    </div>
                  </Typography>
                </Box>
              </Box>
            </div>
          </Grid>
        )}
      </Container>
    </Page>
  );
}

export default BookView;
