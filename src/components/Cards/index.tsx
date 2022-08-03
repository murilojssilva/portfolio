import { FaGithub, FaGitlab, FaInfo } from "react-icons/fa";
import { Button } from "../Button";

import { CardsContainer, CardsHeader, CardsTitle, CardsType } from "./styles";
import { Techs, TechsProps } from "./Techs";

interface CardsProps extends TechsProps {
  type?: "challenge" | "personal" | "academic" | "none";
  colorTop: "projects" | "experiences" | "publications";
  title: string;
  subtitle?: string;
  content: string;
  textButton?: string;
  hasLink?: boolean;
  href?: string;
  iconButton?: "GitHub" | "GitLab";
  inDevelopment?: boolean;
}

export function Cards({
  title,
  subtitle,
  content,
  colorTop,
  hasLink = false,
  href,
  iconButton,
  textButton = "Visualizar projeto",
  type = "none",
  inDevelopment = false,
  hasReact = false,
  hasTypescript = false,
  hasNetlify = false,
  hasHeroku = false,
  hasReactNative = false,
  hasStyledComponents = false,
  hasGraphQL = false,
  hasSCSS = false,
  hasJest = false,
  hasVercel = false,
  hasNextJS = false,
  hasNodeJS = false,
  hasRubyOnRails = false,
  hasJavascript = false,
  hasBootstrap = false,
  hasRedux = false,
  hasExpress = false,
}: CardsProps) {
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

      <p>{content}</p>

      <Techs
        hasBootstrap={hasBootstrap}
        hasExpress={hasExpress}
        hasGraphQL={hasGraphQL}
        hasHeroku={hasHeroku}
        hasJavascript={hasJavascript}
        hasJest={hasJest}
        hasNetlify={hasNetlify}
        hasNextJS={hasNextJS}
        hasNodeJS={hasNodeJS}
        hasReact={hasReact}
        hasReactNative={hasReactNative}
        hasRedux={hasRedux}
        hasRubyOnRails={hasRubyOnRails}
        hasSCSS={hasSCSS}
        hasStyledComponents={hasStyledComponents}
        hasTypescript={hasTypescript}
        hasVercel={hasVercel}
      />

      <Button
        hasLink={hasLink}
        target="_blank"
        href={href}
        icon={
          iconButton === "GitLab" ? (
            <FaGitlab />
          ) : iconButton === "GitHub" ? (
            <FaGithub />
          ) : (
            <></>
          )
        }
        content={textButton}
      />
    </CardsContainer>
  );
}
