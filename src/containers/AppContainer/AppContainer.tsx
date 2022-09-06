import React from "react";
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { theme, GlobalStyles } from "@/theme";

const AppContainer: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export { AppContainer };
