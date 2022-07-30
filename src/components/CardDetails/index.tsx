import { FaGithub, FaGitlab } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiGraphql,
  SiJest,
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
  title: string;
  subtitle?: string;
  type?: string;
  content: string;
  textButton?: string;
  hasLink?: boolean;
  href?: string;
  iconButton: "GitHub" | "GitLab";
  colorType?: "challenge" | "personal" | "academic";
  colorTop: "projects" | "experiences";
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasJavascript?: boolean;
  hasStyledComponents?: boolean;
  hasGraphQL?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasVercel?: boolean;
  hasNextJS?: boolean;
  hasRubyOnRails?: boolean;
  hasBootstrap?: boolean;
  hasRedux?: boolean;
  hasExpress?: boolean;
}

export function CardDetails({
  title,
  subtitle,
  type,
  content,
  colorTop,
  hasLink = false,
  href,
  iconButton,
  textButton = "Visualizar projeto",
  colorType = "challenge",
  hasReact = false,
  hasTypescript = false,
  hasReactNative = false,
  hasStyledComponents = false,
  hasGraphQL = false,
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
    <CardDetailsContainer colorTop={colorTop} colorType={colorType}>
      <CardDetailsHeader>
        <CardDetailsTitle>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </CardDetailsTitle>
        <CardDetailsType>
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
          <SiNextdotjs color={"#5CCFEE"} data-tip="NextJS" />
        </TechLogo>
        <TechLogo hasVercel={hasVercel}>
          <SiVercel color={"#5CCFEE"} data-tip="Vercel" />
        </TechLogo>
        <TechLogo hasReactNative={hasReactNative}>
          <TbBrandReactNative color={"#5CCFEE"} data-tip="React Native" />
        </TechLogo>
        <TechLogo hasTypescript={hasTypescript}>
          <SiTypescript color={"#2F72BC"} data-tip="TypeScript" />
        </TechLogo>
        <TechLogo hasStyledComponents={hasStyledComponents}>
          <SiStyledcomponents color={"#EBAC9D"} data-tip="Styled Components" />
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
