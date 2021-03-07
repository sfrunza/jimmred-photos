import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Box,
  Typography,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  messageWidth: {
    maxWidth: 280,
  },
}));

function AddEditEventForm({ event, mode, onAdd, onCancel, onDelete, onEdit }) {
  const classes = useStyles();
  return (
    <div>
      <Box p={3}>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          color="textPrimary"
        >
          {mode === "add" ? "Add Event" : "Event Info"}
        </Typography>
      </Box>
      <Box p={3} className={classes.container}>
        <Box>
          <Typography variant="h4">{event.name}</Typography>
          <Box>
            <Typography variant="body2">{event.email}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h6">Subject</Typography>
          </Box>
          <Box>
            <Typography variant="body2">{event.subject}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h6">Message</Typography>
          </Box>
          <Box>
            <Typography variant="body2" className={classes.messageWidth}>
              {event.message}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box mt={2}>
            <Typography variant="h5">{event.title}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {moment(event.date, "YYYY-MM-DD").format("dddd MMM Do, YYYY")}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {moment(event.start).format("hh:mm a")}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Box p={2} display="flex" alignItems="center">
        <Box flexGrow={1} />
        <Button
          onClick={onCancel}
          color="primary"
          variant="contained"
          disableElevation
        >
          Close
        </Button>
      </Box>
    </div>
  );
}

AddEditEventForm.propTypes = {
  event: PropTypes.object,
  mode: PropTypes.oneOf(["add", "edit"]).isRequired,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

AddEditEventForm.defaultProps = {
  event: {},
  onAdd: () => {},
  onCancel: () => {},
  onDelete: () => {},
  onEdit: () => {},
};

export default AddEditEventForm;
