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
          content="Desenvolvimento do trabalho de conclusão de curso da Universidade do Estado do Rio de Janeiro, que consiste na criação de um app mobile que demonstra quais tipos de acessibilidade são atendidas nos estabelecimentos cadastrados."
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
          content="Desafio proposto pela empresa Pagcom. Ele consiste em replicar o layout elaborado pela equipe."
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
          content="Desafio proposto pela empresa Upnid Pagamentos. Nesse desafio, você precisará desenvolver um jogo de corrida de carros, rodando num navegador. Ao abrir o jogo, deve aparecer um formulário contendo o campo Nome e um botão Iniciar Corrida. Um contador deve aparecer (3, 2, 1...). Após isso, o carro passará a se movimentar na pista.
          O carro poderá alternar entre três lados da pista (esquerda, meio e direita). Podemos usar as teclas A (esquerda), S (meio), D (direita) para alternar a posição do carro. Além disso, também deve ser possível alternar a posição para esquerda ou direita usando as setinhas do teclado.
          Para simplificar o desafio, fizemos duas imagens que você pode usar como base."
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
        <Cards
          colorTop="projects"
          type="personal"
          title="ResolveLogo (Front End)"
          subtitle="Desenvolvedor Front End"
          content="Desenvolvimento da Landing Page da empresa."
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
          content="Desenvolvimento da funcionalidade de envio de e-mails para o e-mail da empresa e do gerenciamento de estado do aplicativo."
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
          content="Desafio proposto pela empresa TruckPag. Ele consiste em gerar uma interface que mostre os personagens da Disney, consumindo a API fornecida."
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
          content="Desafio proposto pela empresa Vizir. Ele consiste em demonstrar aos clientes as vantagens de se utilizar os serviços FaleMais da empresa Telzir."
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
          content="Desafio proposto pela empresa Intelie."
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
          content="Desafio proposto pela empresa Intelie. O mesmo consiste em desenvolver um catálogo de Pokémons baseando-se na POKEAPI."
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
