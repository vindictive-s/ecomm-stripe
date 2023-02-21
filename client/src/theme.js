import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  secondary: {
    100: "#efccff",
    200: "#df99ff",
    300: "#ce66ff",
    400: "#be33ff",
    500: "#ae00ff",
    600: "#8b00cc",
    700: "#680099",
    800: "#460066",
    900: "#230033",
  },
  neutral: {
    100: "#fbfdfe",
    200: "#f8fcfd",
    300: "#f4fafc",
    400: "#f1f9fb",
    500: "#edf7fa",
    600: "#bec6c8",
    700: "#8e9496",
    800: "#5f6364",
    900: "#2f3132",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
