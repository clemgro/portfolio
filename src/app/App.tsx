import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import About from "../pages/About";

export default function App() {
  return (
    <Box minHeight="100vh">
      <Navbar />
      <Outlet />
      <About />
    </Box>
  );
}
