import { About } from "../About";
import { Experience } from "../Experience";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { InfoCardsContainer } from "./styles";

export function InfoCards() {
  return (
    <InfoCardsContainer>
      <About />
      <Experience />
      <Projects />
      <Skills />
    </InfoCardsContainer>
  );
}
