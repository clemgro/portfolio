import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

export default function ProjectCard({ title, desc }: any) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
