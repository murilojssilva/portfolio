import { FaGithub, FaGitlab, FaInfo, FaNewspaper } from "react-icons/fa";
import { FcDeployment } from "react-icons/fc";
import { useTheme } from "styled-components";
import { Button } from "../Form/Button";

import {
  ButtonContainerPosition,
  CardsContainer,
  CardsHeader,
  CardsText,
  CardsTitle,
  CardsType,
} from "./styles";
import { Techs, TechsProps } from "./Techs";

interface CardsProps extends TechsProps {
  type?: "challenge" | "personal" | "academic" | "none";
  colorTop: "projects" | "experiences" | "publications";
  title: string;
  subtitle?: string;
  content: string;
  hasLink?: boolean;
  hasDeploy?: boolean;
  href?: string;
  deploy?: string;
  iconButton?: "GitHub" | "GitLab" | "Paper" | "Deploy";
  inDevelopment?: boolean;
}

export function Cards({
  title,
  subtitle,
  content,
  colorTop,
  hasLink = false,
  hasDeploy = false,
  href,
  deploy,
  iconButton,
  type = "none",
  inDevelopment = false,
  hasReact = false,
  hasTypescript = false,
  hasNetlify = false,
  hasHeroku = false,
  hasFirebase = false,
  hasReactNative = false,
  hasStyledComponents = false,
  hasGraphQL = false,
  hasJWT = false,
  hasMongoDB = false,
  hasSCSS = false,
  hasSASS = false,
  hasJest = false,
  hasVercel = false,
  hasNextJS = false,
  hasVite = false,
  hasNodeJS = false,
  hasRubyOnRails = false,
  hasJavascript = false,
  hasBootstrap = false,
  hasRedux = false,
  hasExpress = false,
}: CardsProps) {
  const theme = useTheme();
  return (
    <CardsContainer colorTop={colorTop} type={type}>
      <CardsHeader>
        <CardsTitle inDevelopment={inDevelopment}>
          <div>
            <h2>{title}</h2>
            <strong>
              <FaInfo data-tip="Em desenvolvimento" />
            </strong>
          </div>

          <h3>{subtitle}</h3>
        </CardsTitle>
        <CardsType colorTop={colorTop} type={type}>
          <span>
            {type === "academic"
              ? "acadêmico"
              : type === "personal"
              ? "pessoal"
              : type === "challenge"
              ? "desafio"
              : ""}
          </span>
        </CardsType>
      </CardsHeader>

      <CardsText>{content}</CardsText>

      <Techs
        hasBootstrap={hasBootstrap}
        hasExpress={hasExpress}
        hasGraphQL={hasGraphQL}
        hasHeroku={hasHeroku}
        hasJavascript={hasJavascript}
        hasJest={hasJest}
        hasNetlify={hasNetlify}
        hasNextJS={hasNextJS}
        hasVite={hasVite}
        hasFirebase={hasFirebase}
        hasNodeJS={hasNodeJS}
        hasJWT={hasJWT}
        hasMongoDB={hasMongoDB}
        hasReact={hasReact}
        hasReactNative={hasReactNative}
        hasRedux={hasRedux}
        hasRubyOnRails={hasRubyOnRails}
        hasSCSS={hasSCSS}
        hasSASS={hasSASS}
        hasStyledComponents={hasStyledComponents}
        hasTypescript={hasTypescript}
        hasVercel={hasVercel}
      />
      <ButtonContainerPosition>
        <Button
          hasLink={hasLink}
          target="_blank"
          href={href}
          icon={
            iconButton === "GitLab" ? (
              <FaGitlab />
            ) : iconButton === "GitHub" ? (
              <FaGithub />
            ) : iconButton === "Paper" ? (
              <FaNewspaper />
            ) : (
              <></>
            )
          }
          content={"Visualizar repositório"}
        />
        <Button
          hasDeploy={hasDeploy}
          target="_blank"
          href={deploy}
          icon={<FcDeployment />}
          content={"Visualizar projeto"}
        />
      </ButtonContainerPosition>
    </CardsContainer>
  );
}
