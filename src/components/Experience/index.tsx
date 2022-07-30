import { CardDetails } from "../CardDetails";
import { ExperienceContainer } from "./styles";

export function Experience() {
  return (
    <ExperienceContainer>
      <h1>{"<Experiências />"}</h1>
      <CardDetails
        colorTop="experiences"
        title="Upnid Pagamentos"
        subtitle="Desenvolvedor Front End"
        content="Desenvolvimento de funcionalidades na Dashboard do cliente e na seção
          administrativa, criação de componentes no Design System, criação de
          testes unitários, migração do código para Typescript."
        hasReact
        hasTypescript
        hasStyledComponents
        hasJest
        hasGraphQL
      />
      <CardDetails
        colorTop="experiences"
        title="ResolveLogo"
        subtitle="Desenvolvedor Full Stack"
        content="Desenvolvimento da Landing Page da empresa e a funcionalidade de envio
        de e-mails para o e-mail da empresa e do gerenciamento de estado do
        aplicativo."
        hasReact
        hasStyledComponents
        hasHeroku
        hasExpress
      />

      <CardDetails
        colorTop="experiences"
        title="Universidade do Estado do Rio de Janeiro"
        subtitle="Desenvolvedor Full Stack"
        content="Desenvolvimento das páginas relacionadas às seções do Instituto de
        Matemática e Estatística da Universidade do Estado do Rio de Janeiro"
        hasRubyOnRails
        hasBootstrap
      />
    </ExperienceContainer>
  );
}
