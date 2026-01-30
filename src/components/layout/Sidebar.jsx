import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import { Toolbar } from "@mui/material";

const Sidebar = ({ drawerWidth, mobileOpen, onClose }) => {
  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        width: drawerWidth,
        backgroundColor: "#0f2a44",
        color: "#ffffff",
      }}
    >
      <Toolbar />

      {/* -user-info */}

      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottom: "1px solid #374151",
        }}
      >
        <Avatar sx={{ bgcolor: "#2f5bea" }}>JD</Avatar>
        <Box>
          <Typography variant="subtitle2">John Doe</Typography>
          <Typography variant="caption" sx={{ color: "#9ca3af" }}>
            john@example.com
          </Typography>
        </Box>
      </Box>
      <List sx={{ mt: 2 }}>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Accounts", icon: <AccountBalanceIcon /> },
          { text: "Add Transaction", icon: <AddCircleOutlineIcon /> },
          { text: "Transactions", icon: <ReceiptLongIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              mx: 1,
              borderRadius: 1,
              "&:hover": {
                bgcolor: "#374151",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#9ca3af" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            bgcolor: "#1f2937",
            color: "#fff",
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            bgcolor: "#1f2937",
            color: "#fff",
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
