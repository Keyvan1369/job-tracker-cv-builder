import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color = "primary",
}) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: `${color}.main`,
              color: "white",
              p: 2,
              borderRadius: 2,
              display: "flex",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}