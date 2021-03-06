import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phone: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
  },
}));

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <a href="tel:6172060968" role="presentation" className={classes.phone}>
        {children}
      </a>
    </Zoom>
  );
}

export default ScrollTop;
