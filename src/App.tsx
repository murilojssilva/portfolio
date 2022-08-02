import { DefaultTheme, ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import ReactTooltip from "react-tooltip";
import { Home } from "./screen/Home";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { useState } from "react";

export function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  );
}
