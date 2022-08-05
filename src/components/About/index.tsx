import { AboutContainer, AboutContent } from "./styles";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <img src="https://github.com/murilojssilva.png" />
        <article>
          <p>Olá 👋. Este é o portfólio do Murilo Silva.</p>
          <p>
            Trabalhei na empresa Upnid Pagamentos como Front End Developer,
            responsável pela manutenção do website, criação de novas telas,
            alertas aos clientes, view de envio de documentos, migração do
            código legado para Typescript e utilização do Storybook para
            manutenção do Design System.
          </p>
          <p>
            Fiz parte do projeto de um Extensão na Universidade do Estado do Rio
            de Janeiro voltado à criação do protótipo do website do Instituto de
            Matemática e Estatística da Instituição, onde fiz desde a obtenção
            dos requisitos funcionais, não funcionais e regras de negócio,
            elaboração do documento de requisitos e o desenvolvimento do
            protótipo.
          </p>
          <p>
            Desenvolvi o website da empresa ResolveLogo, tanto o frontend
            utilizando ReactJS, Axios, Styled Components como no backend,
            criando um micro-serviço de envio de e-mails utiliando as
            ferramentas NodeJS, Express e Nodemailer.
          </p>
          <p>
            Atualmente, desenvolvendo o Sistema ACESSO, responsável por listar
            quais tipos de acessibilidade são atendidas nos estabelecimentos
            cadastrados próximo à localização do usuário. Utilizando as
            tecnologias React Native, Firebase, Typescript e Styled Components.
          </p>
        </article>
      </AboutContent>
    </AboutContainer>
  );
}
