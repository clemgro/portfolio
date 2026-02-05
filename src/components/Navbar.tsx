import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Portfolio
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
