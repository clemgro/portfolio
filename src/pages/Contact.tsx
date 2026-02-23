import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        px: 6,
        py: 6,
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Stack justifyContent="space-between" sx={{ height: "100%" }}>
          <Stack direction="row" spacing={2}>
            <IconButton component="a" href="https://github.com/clemgro" target="blank" rel="noopener">
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/cl%C3%A9ment-grosselle/" target="blank" rel="noopener">
              <LinkedInIcon />
            </IconButton>
          </Stack>
          <Typography variant="body1" color="secondary">&copy; Clément Grosselle 2026</Typography>
        </Stack>
        <Stack
            bgcolor="primary.light"
          component="form"
          direction="row"
          spacing={2}
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          onSubmit={(e) => {
            e.preventDefault;
            const message = e.currentTarget.message.value;
            window.location.href = `mailto:clementgrosselle@gmail.com?subject=Contact&body=${message}`;
          }}
        >
          <TextField name="message" size="small" placeholder="Votre message ici..." />
          <Button type="submit" variant="contained">
            Envoyer
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
