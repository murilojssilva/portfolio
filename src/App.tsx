import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles";
import { InfoCards } from "./components/InfoCards";
import ReactTooltip from "react-tooltip";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Wrapper>
        <Sidebar />
        <InfoCards />
      </Wrapper>

      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  );
}
