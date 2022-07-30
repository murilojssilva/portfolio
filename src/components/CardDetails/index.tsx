import { FaGithub, FaGitlab } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";
import { Button } from "../Button";

import {
  CardDetailsContainer,
  CardDetailsHeader,
  CardDetailsTitle,
  CardDetailsType,
  TechLogo,
  UsedTechs,
} from "./styles";

interface CardDetailsProps {
  type?: "challenge" | "personal" | "academic" | "none";
  colorTop: "projects" | "experiences";
  title: string;
  subtitle?: string;
  content: string;
  textButton?: string;
  hasLink?: boolean;
  href?: string;
  iconButton?: "GitHub" | "GitLab";
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasHeroku?: boolean;
  hasJavascript?: boolean;
  hasStyledComponents?: boolean;
  hasSCSS?: boolean;
  hasGraphQL?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasVercel?: boolean;
  hasNextJS?: boolean;
  hasRubyOnRails?: boolean;
  hasBootstrap?: boolean;
  hasRedux?: boolean;
  hasNetlify?: boolean;
  hasExpress?: boolean;
}

export function CardDetails({
  title,
  subtitle,
  content,
  colorTop,
  hasLink = false,
  href,
  iconButton,
  textButton = "Visualizar projeto",
  type = "none",
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
  hasBootstrap = false,
  hasRedux = false,
  hasExpress = false,
}: CardDetailsProps) {
  return (
    <CardDetailsContainer colorTop={colorTop} type={type}>
      <CardDetailsHeader>
        <CardDetailsTitle>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </CardDetailsTitle>
        <CardDetailsType colorTop={colorTop} type={type}>
          <span>
            {type === "academic"
              ? "acadêmico"
              : type === "personal"
              ? "pessoal"
              : type === "challenge"
              ? "desafio"
              : ""}
          </span>
        </CardDetailsType>
      </CardDetailsHeader>

      <p>{content}</p>

      <UsedTechs>
        <TechLogo hasReact={hasReact}>
          <SiReact color={"#5CCFEE"} data-tip="ReactJS" />
        </TechLogo>
        <TechLogo hasNextJS={hasNextJS}>
          <SiNextdotjs color={"#F2F2F2"} data-tip="NextJS" />
        </TechLogo>
        <TechLogo hasVercel={hasVercel}>
          <SiVercel color={"#F2F2F2"} data-tip="Vercel" />
        </TechLogo>
        <TechLogo hasNetlify={hasNetlify}>
          <SiNetlify color={"#37A4B2"} data-tip="Netlify" />
        </TechLogo>
        <TechLogo hasReactNative={hasReactNative}>
          <TbBrandReactNative color={"#01A0C8"} data-tip="React Native" />
        </TechLogo>
        <TechLogo hasTypescript={hasTypescript}>
          <SiTypescript color={"#2F72BC"} data-tip="TypeScript" />
        </TechLogo>
        <TechLogo hasStyledComponents={hasStyledComponents}>
          <SiStyledcomponents color={"#EBAC9D"} data-tip="Styled Components" />
        </TechLogo>
        <TechLogo hasSCSS={hasSCSS}>
          <SiCss3 color={"#C26192"} data-tip="SCSS" />
        </TechLogo>
        <TechLogo hasGraphQL={hasGraphQL}>
          <SiGraphql color={"#D932A2"} data-tip="GraphQL" />
        </TechLogo>
        <TechLogo hasRedux={hasRedux}>
          <SiRedux color={"#7248B7"} data-tip="Redux" />
        </TechLogo>
        <TechLogo hasJest={hasJest}>
          <SiJest color={"#BC3A14"} data-tip="Jest" />
        </TechLogo>
        <TechLogo hasNodeJS={hasNodeJS}>
          <SiNodedotjs color={"#529F41"} data-tip="NodeJS" />
        </TechLogo>
        <TechLogo hasExpress={hasExpress}>
          <SiExpress color={"#7B7B7B"} data-tip="Express" />
        </TechLogo>
        <TechLogo hasHeroku={hasHeroku}>
          <SiHeroku color={"#3E0094"} data-tip="Heroku" />
        </TechLogo>
        <TechLogo hasRubyOnRails={hasRubyOnRails}>
          <SiRubyonrails color={"#C20000"} data-tip="Ruby on Rails" />
        </TechLogo>
        <TechLogo hasBootstrap={hasBootstrap}>
          <SiBootstrap color={"#7011EB"} data-tip="BootStrap" />
        </TechLogo>
      </UsedTechs>

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
    </CardDetailsContainer>
  );
}
