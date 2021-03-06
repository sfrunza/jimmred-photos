/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useLocation, matchPath } from "react-router";
import PropTypes from "prop-types";
import { Box, Divider, Grid } from "@material-ui/core";
import {
  Calendar as CalendarIcon,
  Camera as CameraIcon,
  Youtube as YoutubeIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { FaPhotoVideo } from "react-icons";

const navConfig = [
  {
    items: [
      {
        title: "Calendar",
        href: "/app/calendar",
        icon: CalendarIcon,
      },
      {
        title: "Events",
        icon: YoutubeIcon,
        href: "/app/events",
      },
      {
        title: "Photos",
        icon: CameraIcon,
        href: "/app/photos",
      },
    ],
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <Box style={{ display: "flex" }}>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </Box>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

function NavBar({ user, openMobile, onMobileClose }) {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" pb={2} width="100%">
      {navConfig.map((config, i) => (
        <Box key={i}>
          {renderNavItems({
            items: config.items,
            pathname: location.pathname,
          })}
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <Grid container display="flex" justify="center">
        {content}
        <Divider width="100%" />
      </Grid>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
