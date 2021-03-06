import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const HeroBackground = (props) => {
  const { backgroundImage, ...rest } = props;

  const useCustomStyles = makeStyles((theme) => ({
    backgroundImage: {
      width: "100%",
      height: "100%",
      position: "relative",
      minHeight: 400,
      maxHeight: 600,
      background: `url(${backgroundImage}) no-repeat center #fff`,
      backgroundSize: "cover",
    },
  }));

  const customClasses = useCustomStyles();

  return <div className={customClasses.backgroundImage} {...rest}></div>;
};

HeroBackground.propTypes = {
  backgroundImage: PropTypes.string,
};

export default HeroBackground;
