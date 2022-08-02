import { FaCode, FaDatabase, FaGraduationCap } from "react-icons/fa";
import { Skill } from "./Skill";
import { SkillsContainer } from "./styles";

export function Skills() {
  return (
    <SkillsContainer>
      <Skill
        icon={<FaGraduationCap />}
        color={"var(--blue-500)"}
        title={"Ciência da Computação"}
        description="Universidade do Estado do Rio de Janeiro"
        subtitle="Linguagens que utilizei"
        skills="C, C++, Java, Python, Ruby on Rails"
        toolsTitle="Ferramentas"
        tools={[
          "Teoria da Computação",
          "Engenharia de Software",
          "Engenharia de Requisitos do Sistema",
          "Algoritmo em Grafos",
          "Análise e Projeto de Sistemas",
          "Estruturas de Linguagem",
          "Redes de Computadores",
          "Sistemas Operacionais",
          "Arquitetura de Computadores",
          "Interfaces Humano Computador",
          "Compiladores",
          "Computação Gráfica",
          "Inteligência Artificial",
          "Elementos de Lógica",
          "Banco de Dados",
        ]}
      />

      <Skill
        icon={<FaCode />}
        color={"var(--blue-700)"}
        title={"Desenvolvedor Frontend"}
        description="Desenvolvimento de interfaces web"
        subtitle="Linguagens que utilizei"
        skills="HTML, CSS3, Sass, Git, Javascript, Typescript"
        toolsTitle="Ferramentas"
        tools={[
          "ReactJS",
          "Redux",
          "Styled Components",
          "SCSS",
          "TailwindCSS",
          "Bootstrap",
          "MaterialUI",
          "Vercel",
          "Netlify",
          "Jest",
          "GraphQL",
        ]}
      />
      <Skill
        icon={<FaDatabase />}
        color={"var(--blue-900)"}
        title={"Desenvolvedor Backend"}
        description="Desenvolvimento de APIs"
        subtitle="Linguagens que utilizei"
        skills="Javascript, Typescript"
        toolsTitle="Ferramentas"
        tools={["NodeJS", "Express", "JWT", "Heroku"]}
      />
    </SkillsContainer>
  );
}
