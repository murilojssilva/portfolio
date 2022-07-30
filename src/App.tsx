import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Wrapper } from "./styles";
import { InfoCards } from "./components/InfoCards";
import ReactTooltip from "react-tooltip";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Wrapper>
        <Header />
        <InfoCards />
      </Wrapper>
      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  );
}
