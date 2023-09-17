import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserId } from "redux/selectors";
import Navigation from "components/Navigation/Navigation";
import { imgUrl } from "services/apiConst";

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const user = useSelector(selectUserId);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={user.username} component="nav">
        {isLoggedIn ? (
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              p: 0,
              border: "1px solid #ea5f5f",
              "&:hover": { border: "1px solid transparent" },
            }}
          >
            <Avatar
              alt={user.username}
              src={user.avatar && imgUrl + user.avatar.tmdb.avatar_path}
              sx={{ width: 48, height: 48 }}
            />
          </IconButton>
        ) : (
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            sx={{
              color: "#ffffff",
              "&:hover": { color: "#ea5f5f" },
            }}
          >
            <MenuIcon sx={{ width: 45, height: 45 }} />
          </IconButton>
        )}
      </Tooltip>
      <Menu
        variant="menu"
        sx={{
          mt: { xs: "50%", sm: "45px" },
          ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
            width: { xs: "100%", sm: "200px" },
            height: { xs: "400px" },
            backgroundColor: alpha("#000000", 0.8),
            backdropFilter: "blur(5px)",
          },
          ".MuiMenu-list": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            mt: 3,
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Navigation />
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
