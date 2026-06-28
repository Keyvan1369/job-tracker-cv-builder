import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {

    primary: {

      main: "#2563eb",

    },

    secondary: {

      main: "#22c55e",

    },

    background: {

      default: "#f4f7fb",

    },

  },

  shape: {

    borderRadius: 14,

  },

  typography: {

    fontFamily: "Inter, sans-serif",

  },

});

export default theme;