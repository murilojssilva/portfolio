import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Projects } from "../../components/Projects";
import { Publicatins } from "../../components/Publications";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Experience />
      <Projects />
      <Publicatins />
    </HomeContainer>
  );
}
