import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import { Wrapper } from "./styles";
import ReactTooltip from "react-tooltip";
import { Home } from "./screen/Home";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Wrapper>
        <Home />
      </Wrapper>
      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  );
}
