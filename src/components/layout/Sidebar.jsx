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

const Sidebar = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          bgcolor: "#1f2937",
          color: "#fff",
          boxSizing: "border-box",
        },
      }}
    >
      {/* User Info */}
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

      {/* Menu */}
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
    </Drawer>
  );
};

export default Sidebar;
