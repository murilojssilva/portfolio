import { ThemeProvider, useTheme } from "styled-components";

import { GlobalStyle } from "./styles/global";
import ReactTooltip from "react-tooltip";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} />
      </BrowserRouter>
      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  );
}
