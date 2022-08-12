import { Cards } from "../Cards";
import { ExperienceContainer, ExperienceContent } from "./styles";

export function Experience() {
  return (
    <ExperienceContainer>
      <h1>{"<Experiências>"}</h1>
      <ExperienceContent>
        <Cards
          colorTop="experiences"
          title="Upnid Pagamentos"
          subtitle="Desenvolvedor Front End"
          hasReact
          hasTypescript
          hasStyledComponents
          hasJest
          hasGraphQL
        />
        <Cards
          colorTop="experiences"
          title="ResolveLogo"
          subtitle="Desenvolvedor Full Stack"
          hasReact
          hasStyledComponents
          hasHeroku
          hasExpress
          hasJWT
          hasMongoDB
        />

        <Cards
          colorTop="experiences"
          title="Universidade do Estado do Rio de Janeiro"
          subtitle="Desenvolvedor Full Stack"
          hasRubyOnRails
          hasBootstrap
        />
      </ExperienceContent>
      <h1>{"</Experiências>"}</h1>
    </ExperienceContainer>
  );
}
