import { Theme } from "@/@types";

const breakpoints = ["40em", "64em"];

export const theme: Theme = {
  colors: {
    white: "#FFFFFF",
    black: {
      10: "#F9FAFC",
      100: "#F3F4F6",
      200: "#E6E7EB",
      300: "#D1D4DB",
      400: "#9CA2AE",
      500: "#6B7380",
      600: "#4C5564",
      700: "#384152",
      800: "#202938",
      900: "#111828",
    },
    blue: {
      10: "#E6EEFA",
      100: "#B3CBF0",
      200: "#80A9E6",
      300: "#4D86DB",
      400: "#3475D6",
      500: "#0152CC",
      600: "#0142A3",
      700: "#01317A",
      800: "#002152",
      900: "#001029",
    },
    accent: {
      orange: "#FFBC5C",
      blue: "#96DFFF",
    },
  },
  fonts: ["sans-serif"],
  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.0rem",
    h6: "2.4rem",
    h5: "3.2rem",
    h4: "4.0rem",
    h3: "4.8rem",
    h2: "5.6rem",
    h1: "6.0rem",
  },
  breakpoints,
  mediaQueries: {
    maxSm: `@media screen and (max-width: ${breakpoints[0]})`,
    minSm: `@media screen and (min-width: ${breakpoints[0]})`,
    maxMd: `@media screen and (max-width: ${breakpoints[1]})`,
    minMd: `@media screen and (min-width: ${breakpoints[1]})`,
  },
};
