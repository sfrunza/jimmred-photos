import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  center: {
    textAlign: "center",
    justifyContent: "center",
  },
  content: {
    height: "100%",
    minHeight: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  botMargin: {
    marginBottom: theme.spacing(2),
  },
  hoverImg: {
    // opacity: "0.8",
    "&:hover": {
      filter: "brightness(85%) contrast(130%)",
      transition: "all 0.2s ease",
    },
  },
  hoverTitle: {
    "&:hover": {
      opacity: "0.6",
      transition: "all 0.2s ease",
      cursor: "pointer",
    },
  },
}));

const ImgMediaCard = ({
  image,
  title,
  link,
  formState,
  setFormState,
  onBack,
  onNext,
  rate,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.hoverImg}
        onClick={() => {
          onNext(1);
          setFormState({
            ...formState,
            values: {
              ...formState.values,
              service: title,
            },
          });
        }}
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title={title}
        />
      </CardActionArea>
      <CardContent className={clsx(classes.center, classes.content)}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          onClick={() => {
            onNext(1);
            setFormState({
              ...formState,
              values: {
                ...formState.values,
                service: title,
              },
            });
          }}
          className={classes.hoverTitle}
        >
          {title}
        </Typography>
        <Typography variant="body1">${rate}/1 hr</Typography>
        <Typography variant="body1">Introductory Meeting</Typography>
      </CardContent>

      <CardActions className={clsx(classes.center, classes.botMargin)}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          disableElevation
          className={classes.button}
          onClick={() => {
            onNext(2);
            setFormState({
              ...formState,
              values: {
                ...formState.values,
                service: title,
              },
            });
          }}
        >
          Let's Meet
        </Button>
      </CardActions>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ImgMediaCard;
