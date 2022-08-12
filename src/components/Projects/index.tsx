import { Cards } from "../Cards";

import { ProjectsContainer, ProjectsContent } from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>{"<Projetos>"}</h1>
      <ProjectsContent>
        <Cards
          colorTop="projects"
          type="academic"
          title="Sistema ACESSO"
          subtitle="Desenvolvedor Mobile"
          hasReactNative
          hasTypescript
          hasStyledComponents
          hasFirebase
          inDevelopment
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="Desafio Pagcom"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasTypescript
          hasStyledComponents
          hasVercel
          hasVite
          hasLink
          hasDeploy
          deploy="https://desafio-pagcom.vercel.app/"
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/desafio-pagcom"
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="Desafio Upnid"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasNetlify
          hasStyledComponents
          hasLink
          hasDeploy
          iconButton={"GitHub"}
          deploy={"https://upnid-uprace-murilojssilva.netlify.app/"}
          href="https://github.com/murilojssilva/desafio-pagcom"
        />
        <Cards
          colorTop="projects"
          type="academic"
          title="Instituto de Matemática e Estatística (UERJ)"
          subtitle="Desenvolvedor Full Stack"
          hasReact
          hasTypescript
          hasStyledComponents
          hasJest
          hasGraphQL
          hasLink
          iconButton={"GitLab"}
          href="https://gitlab.com/imeuerj/site-ime"
        />
        <Cards
          colorTop="projects"
          type="personal"
          title="ResolveLogo (Front End)"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasSASS
          hasRedux
          hasLink
          hasDeploy
          deploy="https://resolvelogo.netlify.app/"
          iconButton={"GitLab"}
          href="https://gitlab.com/murilojssilva/resolvelogoweb"
        />
        <Cards
          colorTop="projects"
          type="personal"
          title="ResolveLogo (Back End)"
          subtitle="Desenvolvedor Back End"
          hasNodeJS
          hasExpress
          hasHeroku
          hasJWT
          hasMongoDB
          hasLink
          hasDeploy
          deploy="https://desafio-truckpag.netlify.app/"
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/resolvelogobackend"
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="TruckPag"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasStyledComponents
          hasTypescript
          hasJest
          hasNetlify
          hasLink
          hasDeploy
          deploy="https://desafio-truckpag.netlify.app/"
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/desafio-truckpag"
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="Vizir"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasTypescript
          hasVercel
          hasNextJS
          hasSASS
          hasLink
          hasDeploy
          deploy="https://murilosilva-desafio-vizir.vercel.app/"
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/desafio-vizir"
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="Intelie - Chart"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasNetlify
          hasLink
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/intelie-chart"
        />
        <Cards
          colorTop="projects"
          type="challenge"
          title="Intelie - Pokemon"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasNetlify
          hasLink
          iconButton={"GitHub"}
          href="https://github.com/murilojssilva/pokemon-intelie"
        />
      </ProjectsContent>
      <h1>{"</Projetos>"}</h1>
    </ProjectsContainer>
  );
}
