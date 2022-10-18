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
          type="professional"
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
          type="personal"
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
          type="academic"
          title="Universidade do Estado do Rio de Janeiro (UERJ)"
          hasRubyOnRails
          hasBootstrap
        />
      </ExperienceContent>
      <h1>{"</Experiências>"}</h1>
    </ExperienceContainer>
  );
}
