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
          inDevelopment
          hasReactNative
          hasTypescript
          hasStyledComponents
          hasReactNavigation
          hasFirebase
          last_commit="03/2023"
          iconButton="Deploy"
          deploy="https://corre.social"
        />
        <Cards
          colorTop="experiences"
          title="acesso"
          stack="mobile"
          type="academic"
          hasReactNative
          hasTypescript
          hasStyledComponents
          hasReactNavigation
          hasFirebase
          last_commit="06/2022 - 03/2023"
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
          iconButton="GitHub"
          href="https://github.com/upnid"
          last_commit="09/2021 - 01/2022"
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
          iconButton="Deploy"
          deploy="https://resolvelogo.netlify.app/"
          last_commit="09/2020 - 12/2020"
        />

        <Cards
          colorTop="experiences"
          stack="fullstack"
          type="academic"
          title="Universidade do Estado do Rio de Janeiro"
          subtitle="Extensionista Voluntário"
          last_commit="04/2017 - 12/2018"
          hasRubyOnRails
          hasBootstrap
        />
      </ExperienceContent>
      <Title type="experiences" title="/Experiências" />
    </ExperienceContainer>
  );
}
