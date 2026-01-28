import { Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Dashboard
      </Typography>

      <Typography sx={{ mt: 1, color: "#6b7280" }}>
        This is the dashboard content area.
      </Typography>
    </Box>
  );
};

export default Dashboard;
