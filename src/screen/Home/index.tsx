import { useTheme } from "styled-components";
import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { Publicatins } from "../../components/Publications";
import { Skills } from "../../components/Skills";

import { HomeContainer } from "./styles";

interface HomeProps {
  toggleTheme(): void;
}

export function Home({ toggleTheme }: HomeProps) {
  const theme = useTheme();

  return (
    <HomeContainer>
      <Header toggleTheme={toggleTheme} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publicatins />
      <Footer />
    </HomeContainer>
  );
}
