import { Box, Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Box py={8}>
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight={600}>
          À propos
        </Typography>

        <Typography>
          Concepteur développeur d’applications orienté qualité logicielle.
          Approche méthodique, centrée sur la compréhension du besoin
          et la simplicité de la solution.
        </Typography>

        <Typography variant="h6">Parcours</Typography>
        <Typography>
          Développement d’applications web avec une montée en compétence continue
          sur React et l’écosystème frontend moderne.
        </Typography>

        <Typography variant="h6">Méthode de travail</Typography>
        <Typography component="ul">
          <li>Analyse du besoin</li>
          <li>Conception claire</li>
          <li>Implémentation propre</li>
          <li>Validation et itération</li>
        </Typography>

        <Typography variant="h6">Technologies</Typography>
        <Typography>
          React, TypeScript, Material UI, Git, Vite.
        </Typography>

        <Typography variant="h6">Contact</Typography>
        <Typography>
          Disponible pour missions, projets ou échanges techniques.
        </Typography>
      </Stack>
    </Box>
  );
}
