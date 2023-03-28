import { ExperienceContainer, ExperienceContent } from "./styles";

import { Cards } from "../Cards";
import { Title } from "../Title";

export function Experience() {
  return (
    <ExperienceContainer>
      <Title type="experiences" title="Experiências" />
      <ExperienceContent>
        <Cards
          colorTop="experiences"
          title="corre."
          stack="mobile"
          type="professional"
          hasReactNative
          hasTypescript
          hasStyledComponents
          hasReactNavigation
          hasFirebase
        />
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
      <Title type="experiences" title="/Experiências" />
    </ExperienceContainer>
  );
}
