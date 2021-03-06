import React, { useRef, useState } from "react";
import { Box, ButtonBase, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { User as UserIcon, LogOut as LogOutIcon } from "react-feather";
import { useStateValue } from "src/StateProvider";
import { signOut } from "src/UserAction";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 30,
    width: 30,
    marginRight: theme.spacing(1),
    border: "2px solid #000",
    borderRadius: "50%",
  },
  popover: {
    width: 200,
  },
}));

function Account() {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();
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
      // setLoading(dispatch, false);
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <UserIcon className={classes.avatar} color="black" />
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={handleLogout}>
          <LogOutIcon style={{ marginRight: 8 }} />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
