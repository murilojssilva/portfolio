import { useContext } from "react";

import {
  FaDatabase,
  FaCode,
  FaGithubAlt,
  FaGitlab,
  FaMobile,
  FaNewspaper,
  FaDesktop,
  FaClock,
} from "react-icons/fa";
import { FcDeployment } from "react-icons/fc";

import { Button } from "../Form/Button";
import { ProfileContext } from "@/contexts/ProfileContext";

import { ICardsProps } from "@/interfaces/ICardProps";

import {
  ButtonContainerPosition,
  CardsContainer,
  CardsFooter,
  CardsHeader,
  CardsTitle,
  CardsType,
} from "./styles";
import { Techs } from "./Techs";

export function Cards({
  title,
  subtitle,
  colorTop,
  stack,
  hasLink = false,
  hasDeploy = false,
  href,
  deploy,
  iconButton,
  last_commit,
  type = "none",
  inDevelopment = false,
  hasReact = false,
  hasVue = false,
  hasTypescript = false,
  hasNetlify = false,
  hasHeroku = false,
  hasFirebase = false,
  hasAsyncStorage = false,
  hasReactNative = false,
  hasElixir = false,
  hasStripe = false,
  hasStyledComponents = false,
  hasGraphQL = false,
  hasPhosphor = false,
  hasZod = false,
  hasRadix = false,
  hasExpo = false,
  hasChakra = false,
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
  hasReactNavigation = false,
  hasTailwind = false,
  hasReactHookForm = false,
  hasNativeBase = false,
  hasNextJS = false,
  hasVite = false,
  hasNodeJS = false,
  hasRubyOnRails = false,
  hasJavascript = false,
  hasBootstrap = false,
  hasRedux = false,
  hasExpress = false,
}: ICardsProps) {
  const { loading } = useContext(ProfileContext);
  return (
    <CardsContainer colorTop={colorTop} type={type}>
      <CardsHeader>
        <CardsTitle inDevelopment={inDevelopment}>
          <span>
            {stack === "mobile" ? (
              <FaMobile
                size={16}
                color={"var(--blue-500)"}
                data-tip={loading ? "Carregando" : "Mobile"}
              />
            ) : stack === "backend" ? (
              <FaDatabase
                size={16}
                color={"var(--purple-500)"}
                data-tip={loading ? "Carregando" : "Backend"}
              />
            ) : stack === "frontend" ? (
              <FaCode
                size={16}
                color={"var(--green-500)"}
                data-tip={loading ? "Carregando" : "Frontend"}
              />
            ) : stack === "fullstack" ? (
              <FaDesktop
                size={16}
                color={"var(--red-500)"}
                data-tip={loading ? "Carregando" : "Fullstack"}
              />
            ) : null}
          </span>
          <h2>{`${title} `}</h2>
        </CardsTitle>

        <CardsType>
          {last_commit && (
            <span>
              <FaClock />
              {last_commit}
            </span>
          )}
        </CardsType>
      </CardsHeader>

      <p>{subtitle}</p>
      <CardsFooter>
        <Techs
          hasBootstrap={hasBootstrap}
          hasExpress={hasExpress}
          hasGraphQL={hasGraphQL}
          hasStripe={hasStripe}
          hasHeroku={hasHeroku}
          hasJavascript={hasJavascript}
          hasJest={hasJest}
          hasNetlify={hasNetlify}
          hasNextJS={hasNextJS}
          hasRadix={hasRadix}
          hasExpo={hasExpo}
          hasChakra={hasChakra}
          hasVue={hasVue}
          hasFaunaDB={hasFaunaDB}
          hasAxios={hasAxios}
          hasAsyncStorage={hasAsyncStorage}
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
          hasElixir={hasElixir}
          hasRedux={hasRedux}
          hasRubyOnRails={hasRubyOnRails}
          hasSCSS={hasSCSS}
          hasSASS={hasSASS}
          hasStyledComponents={hasStyledComponents}
          hasTypescript={hasTypescript}
          hasVercel={hasVercel}
          hasReactNavigation={hasReactNavigation}
          hasTailwind={hasTailwind}
          hasNativeBase={hasNativeBase}
          hasReactHookForm={hasReactHookForm}
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
              ) : null
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
