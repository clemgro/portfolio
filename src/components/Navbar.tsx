import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger ? "background.paper" : "transparent",
        transition: "all 0.3s ease",
        backdropFilter: trigger ? "blur(6px)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Clément Grosselle
        </Typography>

        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Accueil
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projets
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            À propos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
