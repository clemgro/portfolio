import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function Layout() {
  return (
    <Container disableGutters>
      <Navbar />
      <Outlet />
      <About />
      <Contact/>


    </Container>
  );
}
