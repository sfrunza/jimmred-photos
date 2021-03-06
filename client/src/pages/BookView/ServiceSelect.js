import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, Grid, useMediaQuery } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import ImgMediaCard from "./components/ImgMediaCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  itemsContainer: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
    },
  },
}));

function ServiceSelect({
  className,
  onNext,
  onBack,
  formState,
  setFormState,
  ...rest
}) {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  // const handleService = (serv) => {
  //   setFormState({
  //     ...formState,
  //     values: {
  //       ...formState.values,
  //       service: serv,
  //     },
  //   });
  // };

  return (
    <>
      <SectionHeader
        title="Our private services"
        titleColor="textSecondary"
        disableGutter
        align={isMd ? "left" : "center"}
      />
      <Grid container spacing={isMd ? 4 : 2} className={classes.itemsContainer}>
        <Grid item xs={12} md={4}>
          <ImgMediaCard
            image="https://static.wixstatic.com/media/8f7f50ec73ea4d90887cc4f571b1acba.jpg/v1/fill/w_584,h_392,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8f7f50ec73ea4d90887cc4f571b1acba.webp"
            title="Modeling Shoot"
            formState={formState}
            setFormState={setFormState}
            onBack={onBack}
            onNext={onNext}
            rate="120"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImgMediaCard
            image="https://static.wixstatic.com/media/43cddb4301684a01a26eaea100162934.jpeg/v1/fill/w_584,h_392,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/43cddb4301684a01a26eaea100162934.webp"
            title="Out Door Shoot"
            formState={formState}
            setFormState={setFormState}
            onBack={onBack}
            onNext={onNext}
            rate="140"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImgMediaCard
            image="https://static.wixstatic.com/media/603ee8fd01474f4a9b8946d204383b09.jpg/v1/fill/w_584,h_392,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/603ee8fd01474f4a9b8946d204383b09.webp"
            title="Video Shoot"
            onNext={onNext}
            formState={formState}
            setFormState={setFormState}
            onBack={onBack}
            rate="1900"
          />
        </Grid>
      </Grid>
    </>
  );
}

ServiceSelect.propTypes = {
  className: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};

export default ServiceSelect;
