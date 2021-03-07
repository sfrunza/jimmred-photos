import React, { useState, useEffect, useCallback } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import Page from "src/components/Page";
import useIsMountedRef from "src/components/useIsMountedRef";
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

function EventsListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [events, setEvents] = useState(null);

  const getUsers = useCallback(() => {
    axios.get("/events.json").then((response) => {
      if (isMountedRef.current) {
        let data = response.data;
        setEvents(data);
      }
    });
  }, [isMountedRef]);

  useEffect(() => {
    getUsers();
  }, [getUsers, JSON.stringify(events)]);

  if (!events) {
    return null;
  }
  return (
    <Page className={classes.root} title="Events List">
      <Container className={classes.container}>
        <Header />
        <Box mt={3}>
          <Results events={events} />
        </Box>
      </Container>
    </Page>
  );
}

export default EventsListView;
