import { Box, Typography, Stack, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import bg from "../assets/bg.webp";

export default function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        py={8}
        sx={{
          minHeight: "60vh",
          width: "100%",
          position: "relative",
          backgroundImage: `linear-gradient(rgba(11,18,21,0.5), rgba(11,18,21,0.5)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        alignContent={"center"}
      >
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h1" color="secondary">
            Bonjour, je suis <br /> Clément Grosselle
          </Typography>
          <Typography variant="body1" color="secondary">
            Concepteur développeur d’applications
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            mb: 4,
          }}
        >
          <IconButton onClick={scrollToNextSection} color="secondary">
            <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
