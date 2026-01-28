import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 260;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor: "#f4f6f8",
          p: 3,
          mt: "64px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
