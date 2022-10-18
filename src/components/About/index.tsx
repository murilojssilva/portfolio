import { AboutContainer, AboutContent } from "./styles";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <img src="https://github.com/murilojssilva.png" />
        <article>
          <p>Olá 👋. Este é o portfólio do Murilo Silva.</p>
          <p>
            💻 Trabalhei na empresa Upnid Pagamentos como Front End Developer,
            responsável pela manutenção do website, desenvolvimento de novas
            telas, alertas aos clientes, view de envio de documentos, migração
            do código legado para Typescript e utilização do Storybook para
            manutenção do Design System.
          </p>
          <p>
            📓 Fiz parte do projeto de um Extensão na Universidade do Estado do
            Rio de Janeiro voltado à desenvolvimento do protótipo do website do
            Instituto de Matemática e Estatística da Instituição, onde fiz desde
            a obtenção dos requisitos funcionais, não funcionais e regras de
            negócio, elaboração do documento de requisitos e o desenvolvimento
            do protótipo.
          </p>
          <p>
            🏛️ Desenvolvi o website da empresa ResolveLogo, tanto o frontend
            desenvolvendo a landing page da empresa, como no backend,
            desenvolvendo um micro-serviço de envio de e-mails.
          </p>
          <p>
            📱 Atualmente, desenvolvendo o Sistema ACESSO, responsável por
            listar quais tipos de acessibilidade são atendidas nos
            estabelecimentos cadastrados próximo à localização do usuário.
          </p>
        </article>
      </AboutContent>
    </AboutContainer>
  );
}
