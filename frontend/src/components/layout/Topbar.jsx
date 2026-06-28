import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import { useAuth } from "../../context/authContext";

export default function Topbar() {

  const { user } = useAuth();

  return (

    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        width: "calc(100% - 260px)",
        ml: "260px",
        borderBottom: "1px solid #eee",
      }}
    >

      <Toolbar>

        <Typography
          variant="h5"
          fontWeight="bold"
        >
          Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton>

          <SearchIcon />

        </IconButton>

        <IconButton>

          <Badge
            badgeContent={3}
            color="error"
          >

            <NotificationsIcon />

          </Badge>

        </IconButton>

        <Avatar
          sx={{
            ml: 2,
          }}
        >
          {user?.name?.charAt(0)}
        </Avatar>

      </Toolbar>

    </AppBar>

  );

}