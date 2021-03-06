import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  makeStyles,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import {
  User as UserIcon,
  Calendar as CalendarIcon,
  LogOut as LogOutIcon,
} from "react-feather";
import { useStateValue } from "src/StateProvider";
import { signOut, setLoading } from "src/UserAction";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 30,
    width: 30,
    // marginRight: theme.spacing(1),
    border: "2px solid #000",
    padding: 1,
    borderRadius: "50%",
  },
  avatar2: {
    height: 30,
    width: 30,
    // marginRight: theme.spacing(1),
    border: "2px solid #fff",
    borderRadius: "50%",
  },
  avatarMobile: {
    height: 27,
    width: 27,
    // marginRight: theme.spacing(1),
    border: "2px solid rgba(0,0,0,.54)",
    padding: 1,
    color: "rgba(0,0,0,.54)",
    borderRadius: "50%",
    marginRight: 15,
  },
  avatarMobile2: {
    height: 27,
    width: 27,
    // marginRight: theme.spacing(1),
    border: "2px solid #fff",
    padding: 1,
    borderRadius: "50%",
    marginRight: 15,
  },
  popover: {
    width: 200,
    marginTop: "5px",
  },
  icons: {
    height: 20,
    width: 20,
    marginRight: theme.spacing(1),
  },
  itemEmail: {
    paddingBottom: theme.spacing(2),
    fontSize: 12,
    fontWeight: 500,
    "&:hover": {
      cursor: "default",
      backgroundColor: "transparent",
    },
  },
}));

function Account({ navbar }) {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    if (user) {
      signOut(dispatch, history);
      setLoading(dispatch, false);
    }
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <UserIcon
          className={
            navbar
              ? isMd
                ? classes.avatar
                : classes.avatarMobile
              : isMd
              ? classes.avatar2
              : classes.avatarMobile2
          }
        />
      </Box>
      <Menu
        onClose={handleClose}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem className={classes.itemEmail}>{user.email}</MenuItem>
        <Divider />
        <MenuItem
          component={RouterLink}
          to={user.customer ? "/account" : user.admin ? "/app" : "/calendar"}
          onClick={handleClose}
        >
          {user.customer || user.admin ? (
            <UserIcon className={classes.icons} />
          ) : (
            <CalendarIcon className={classes.icons} />
          )}
          {user.customer ? "Account" : user.admin ? "Dashboard" : "Calendar"}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <LogOutIcon className={classes.icons} />
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Account;
