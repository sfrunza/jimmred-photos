import React from "react";
import { Minus as MinusIcon, Plus as PlusIcon } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    minWidth: 30,
    fontWeight: 400,
  },
}));

const AmountButtons = ({ increase, decrease, amount }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size="small" className={classes.button} onClick={decrease}>
        <MinusIcon strokeWidth="1" size={20} />
      </Button>
      <Typography variant="subtitle1">{amount}</Typography>
      <Button size="small" className={classes.button} onClick={increase}>
        <PlusIcon strokeWidth="1" size={20} />
      </Button>
    </div>
  );
};

export default AmountButtons;
