import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "react-feather";
import Calendar from "./components/Calendar";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrap: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  aside: {
    width: "100%",
    marginTop: theme.spacing(5),

    [theme.breakpoints.up("md")]: {
      float: "right",
      width: "25%",
      padding: "1em",
      position: "sticky",
      top: "20em",
    },
  },
  content: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      width: "70%",
      minHeight: "60vh",
      marginTop: theme.spacing(5),
    },
  },
}));

function DaySelect({
  className,
  onBack,
  onNext,
  setFormState,
  formState,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {onBack && (
        <Button
          onClick={() => onBack(2)}
          size="medium"
          color="primary"
          disableFocusRipple
          disableRipple
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>
      )}

      <div className={classes.wrap}>
        <aside className={classes.aside}>
          <Typography gutterBottom variant="h4">
            {formState.values.service}
          </Typography>
          <Typography variant="body2">1h | Introductory Meeting</Typography>
        </aside>
        <div className={classes.content}>
          <Typography variant="h3">Schedule Online</Typography>
          <Box mt={6}>
            <Calendar
              setFormState={setFormState}
              formState={formState}
              onNext={onNext}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

DaySelect.propTypes = {
  className: PropTypes.string,
  onBack: PropTypes.func,
};

export default DaySelect;
