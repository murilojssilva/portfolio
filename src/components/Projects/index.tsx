import { CardDetails } from "../CardDetails";

import { ProjectsContainer } from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>{"<Projetos />"}</h1>
      <CardDetails
        colorTop="projects"
        type="academic"
        title="Sistema ACESSO"
        subtitle="Desenvolvedor Mobile"
        content="Desenvolvimento do trabalho de conclusão de curso da Universidade do Estado do Rio de Janeiro, que consiste na criação de um app mobile que demonstra quais tipos de acessibilidade são atendidas nos estabelecimentos cadastrados."
        hasReactNative
        hasTypescript
        hasStyledComponents
      />
      <CardDetails
        colorTop="projects"
        type="academic"
        title="Instituto de Matemática e Estatística (UERJ)"
        subtitle="Desenvolvedor Full Stack"
        content="Desenvolvimento das páginas relacionadas às seções do Instituto de
        Matemática e Estatística da Universidade do Estado do Rio de Janeiro."
        hasReact
        hasTypescript
        hasStyledComponents
        hasJest
        hasGraphQL
        hasLink
        iconButton={"GitLab"}
        href="https://gitlab.com/imeuerj/site-ime"
      />

      <CardDetails
        colorTop="projects"
        type="personal"
        title="ResolveLogo (Front End)"
        subtitle="Desenvolvedor Front End"
        content="Desenvolvimento da Landing Page da empresa."
        hasReact
        hasStyledComponents
        hasRedux
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/resolvelogofrontend"
      />

      <CardDetails
        colorTop="projects"
        type="personal"
        title="ResolveLogo (Back End)"
        subtitle="Desenvolvedor Back End"
        content="Desenvolvimento da funcionalidade de envio de e-mails para o e-mail da empresa e do gerenciamento de estado do aplicativo."
        hasNodeJS
        hasExpress
        hasHeroku
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/resolvelogobackend"
      />

      <CardDetails
        colorTop="projects"
        type="challenge"
        title="TruckPag"
        subtitle="Desenvolvedor Front End"
        content="Desafio proposto pela empresa TruckPag. Ele consiste em gerar uma interface que mostre os personagens da Disney, consumindo a API fornecida."
        hasReact
        hasStyledComponents
        hasTypescript
        hasJest
        hasNetlify
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/desafio-truckpag"
      />

      <CardDetails
        colorTop="projects"
        type="challenge"
        title="Vizir"
        subtitle="Desenvolvedor Front End"
        content="Desafio proposto pela empresa Vizir. Ele consiste em demonstrar aos clientes as vantagens de se utilizar os serviços FaleMais da empresa Telzir."
        hasReact
        hasTypescript
        hasVercel
        hasNextJS
        hasSCSS
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/desafio-vizir"
      />

      <CardDetails
        colorTop="projects"
        type="challenge"
        title="Intelie - Chart"
        subtitle="Desenvolvedor Front End"
        content="Desafio proposto pela empresa Intelie."
        hasReact
        hasNetlify
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/intelie-chart"
      />

      <CardDetails
        colorTop="projects"
        type="challenge"
        title="Intelie - Pokemon"
        subtitle="Desenvolvedor Front End"
        content="Desafio proposto pela empresa Intelie. O mesmo consiste em desenvolver um catálogo de Pokémons baseando-se na POKEAPI."
        hasReact
        hasNetlify
        hasLink
        iconButton={"GitHub"}
        href="https://github.com/murilojssilva/pokemon-intelie"
      />
    </ProjectsContainer>
  );
}
