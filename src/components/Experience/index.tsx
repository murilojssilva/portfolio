import { ExperienceContainer, ExperienceContent } from "./styles";

import { Cards } from "@components/Cards";

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
          title="UERJ"
          hasRubyOnRails
          hasBootstrap
        />
      </ExperienceContent>
      <h1>{"</Experiências>"}</h1>
    </ExperienceContainer>
  );
}
