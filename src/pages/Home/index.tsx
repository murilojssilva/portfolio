import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";

import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
    </HomeContainer>
  );
}
