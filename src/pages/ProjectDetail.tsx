import { Box, Typography, Stack, Divider, Link } from "@mui/material";

export default function ProjectDetail() {
  return (
    <Box py={8}>
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight={600}>
          Nom du projet
        </Typography>

        <Typography color="text.secondary">
          Contexte et contraintes initiales du projet.
        </Typography>

        <Divider />

        <Typography variant="h6">Objectif</Typography>
        <Typography>
          Fournir une interface claire, rapide et maintenable répondant
          précisément au besoin identifié.
        </Typography>

        <Typography variant="h6">Fonctionnalités</Typography>
        <Typography component="ul">
          <li>Affichage et gestion des données</li>
          <li>Navigation structurée</li>
          <li>Feedback utilisateur clair</li>
          <li>Gestion des erreurs</li>
        </Typography>

        <Typography variant="h6">Choix techniques</Typography>
        <Typography>
          React pour la structuration UI, TypeScript pour la robustesse,
          Material UI pour la cohérence visuelle.
        </Typography>

        <Typography variant="h6">Résultats</Typography>
        <Typography>
          Code lisible et extensible, performance maîtrisée,
          UX claire sans surcharge visuelle.
        </Typography>

        <Divider />

        <Stack direction="row" spacing={2}>
          <Link href="#" target="_blank">
            Dépôt GitHub
          </Link>
          <Link href="#" target="_blank">
            Démo en ligne
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
