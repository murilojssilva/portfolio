import {
  FaDatabase,
  FaCode,
  FaGithubAlt,
  FaGitlab,
  FaInfo,
  FaMobile,
  FaNewspaper,
  FaDesktop,
} from "react-icons/fa";
import { FcDeployment } from "react-icons/fc";
import { useTheme } from "styled-components";
import { Button } from "../Form/Button";

import {
  ButtonContainerPosition,
  CardsContainer,
  CardsFooter,
  CardsHeader,
  CardsTitle,
  CardsType,
} from "./styles";
import { Techs, TechsProps } from "./Techs";

interface CardsProps extends TechsProps {
  type?: "challenge" | "personal" | "academic" | "bootcamp" | "none";
  stack?: "mobile" | "backend" | "frontend" | "fullstack";
  colorTop: "projects" | "experiences" | "publications";
  title: string;
  hasLink?: boolean;
  hasDeploy?: boolean;
  href?: string;
  deploy?: string;
  iconButton?: "GitHub" | "GitLab" | "Paper" | "Deploy";
  inDevelopment?: boolean;
}

export function Cards({
  title,
  colorTop,
  stack,
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
  hasPhosphor = false,
  hasZod = false,
  hasRadix = false,
  hasExpo = false,
  hasAxios = false,
  hasFaunaDB = false,
  hasYup = false,
  hasVictoryNative = false,
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
          <span>
            {stack === "mobile" ? (
              <FaMobile
                size={16}
                color={theme.colors["primary"]}
                data-tip="Mobile"
              />
            ) : stack === "backend" ? (
              <FaDatabase
                size={16}
                color={theme.colors["primary"]}
                data-tip="Backend"
              />
            ) : stack === "frontend" ? (
              <FaCode
                size={16}
                color={theme.colors["primary"]}
                data-tip="Frontend"
              />
            ) : stack === "fullstack" ? (
              <FaDesktop
                size={16}
                color={theme.colors["primary"]}
                data-tip="Fullstack"
              />
            ) : null}
          </span>
          <h2>{`${title} `}</h2>

          <strong>
            <FaInfo data-tip="Em desenvolvimento" />
          </strong>
        </CardsTitle>
        <CardsType colorTop={colorTop} type={type}>
          <span>
            {type === "academic"
              ? "acadêmico"
              : type === "personal"
              ? "pessoal"
              : type === "challenge"
              ? "desafio"
              : type === "bootcamp"
              ? "bootcamp"
              : ""}
          </span>
        </CardsType>
      </CardsHeader>
      <CardsFooter>
        <Techs
          hasBootstrap={hasBootstrap}
          hasExpress={hasExpress}
          hasGraphQL={hasGraphQL}
          hasHeroku={hasHeroku}
          hasJavascript={hasJavascript}
          hasJest={hasJest}
          hasNetlify={hasNetlify}
          hasNextJS={hasNextJS}
          hasRadix={hasRadix}
          hasExpo={hasExpo}
          hasFaunaDB={hasFaunaDB}
          hasAxios={hasAxios}
          hasYup={hasYup}
          hasVictoryNative={hasVictoryNative}
          hasZod={hasZod}
          hasPhosphor={hasPhosphor}
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
                <FaGithubAlt />
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
      </CardsFooter>
    </CardsContainer>
  );
}
