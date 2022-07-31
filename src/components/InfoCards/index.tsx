import { About } from "../About";
import { Experience } from "../Experience";
import { Projects } from "../Projects";
import { Publicatins } from "../Publications";
import { InfoCardsContainer } from "./styles";

export function InfoCards() {
  return (
    <InfoCardsContainer>
      <About />
      <Experience />
      <Projects />
      <Publicatins />
    </InfoCardsContainer>
  );
}
