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
          stack="frontend"
          hasReact
          hasTypescript
          hasStyledComponents
          hasJest
          hasGraphQL
        />
        <Cards
          colorTop="experiences"
          title="ResolveLogo"
          stack="fullstack"
          hasReact
          hasStyledComponents
          hasHeroku
          hasExpress
          hasJWT
          hasMongoDB
        />

        <Cards
          colorTop="experiences"
          stack="fullstack"
          title="Universidade do Estado do Rio de Janeiro"
          hasRubyOnRails
          hasBootstrap
        />
      </ExperienceContent>
      <h1>{"</Experiências>"}</h1>
    </ExperienceContainer>
  );
}
