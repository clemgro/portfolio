import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Box py={8}>
      <Typography variant="h4" fontWeight={600} mb={2}>
        Projets sélectionnés
      </Typography>

      <Typography color="text.secondary" mb={6}>
        Chaque projet répond à un besoin concret.
        Objectif : démontrer la capacité à concevoir, structurer et livrer.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Dashboard de gestion"
            desc="Visualisation et gestion de données métiers en temps réel."
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Application de suivi utilisateur"
            desc="Recherche, modification et validation d’entités utilisateur."
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProjectCard
            title="Portfolio technique"
            desc="Site personnel orienté performance et lisibilité."
          />
        </Grid>
      </Grid>
    </Box>
  );
}
