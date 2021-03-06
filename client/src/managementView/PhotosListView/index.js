import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import Results from "./Results";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  container: {
    padding: 0,
  },
}));

function PhotosListView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Photos List">
      <Container className={classes.container}>
        <Header />
        <Box mt={3}>
          <Results />
        </Box>
      </Container>
    </Page>
  );
}

export default PhotosListView;
