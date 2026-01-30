import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ drawerWidth, onMenuClick }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#2f5bea",
        zIndex: 1201,
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* MENU ICON */}
          <IconButton
            edge="start"
            onClick={onMenuClick}
            sx={{
              mr: 1,
              color: "#fff",
              display: { md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Account Book
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }}>JD</Avatar>
            <Typography variant="body2">John Doe</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
