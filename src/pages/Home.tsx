import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box py={8}>
      <Stack spacing={4}>
        <Typography variant="h3" fontWeight={700}>
          Concepteur développeur d’applications web
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Je conçois des applications web robustes, maintenables et orientées usage.
          Focus sur la qualité du code, la performance et la lisibilité.
        </Typography>

        <Typography>
          Développement frontend avec React et Material UI.
          Maîtrise des architectures modernes, de l’intégration API et de la mise en production.
          Approche pragmatique : résoudre un problème précis avec une solution simple et mesurable.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            size="large"
          >
            Voir les projets
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
