import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";
import { Publicatins } from "../../components/Publications";
import { Skills } from "../../components/Skills";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publicatins />
      <Footer />
    </HomeContainer>
  );
}
