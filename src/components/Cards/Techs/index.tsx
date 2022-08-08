import { TechContent, TechsContainer } from "./styles";
import { TbBrandReactNative } from "react-icons/tb";

import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import logoJWT from "../../../assets/jwt.svg";
import logoViteJS from "../../../assets/vitejs.svg";
import { useTheme } from "styled-components";

export interface TechsProps {
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
  hasMongoDB?: boolean;
  hasJWT?: boolean;
  hasNextJS?: boolean;
  hasVite?: boolean;
  hasFirebase?: boolean;
  hasRubyOnRails?: boolean;
  hasBootstrap?: boolean;
  hasRedux?: boolean;
  hasNetlify?: boolean;
  hasExpress?: boolean;
}

export function Techs({
  hasReact,
  hasTypescript,
  hasJavascript,
  hasNetlify,
  hasHeroku,
  hasMongoDB,
  hasJWT,
  hasReactNative,
  hasStyledComponents,
  hasGraphQL,
  hasSCSS,
  hasJest,
  hasVercel,
  hasNextJS,
  hasVite,
  hasNodeJS,
  hasRubyOnRails,
  hasBootstrap,
  hasRedux,
  hasFirebase,
  hasExpress,
}: TechsProps) {
  const theme = useTheme();
  return (
    <TechsContainer>
      <TechContent hasJavascript={hasJavascript}>
        <SiJavascript color={"#EFD81D"} data-tip="Javascript" />
      </TechContent>
      <TechContent hasReact={hasReact}>
        <SiReact color={"#5CCFEE"} data-tip="ReactJS" />
      </TechContent>
      <TechContent hasNextJS={hasNextJS}>
        <SiNextdotjs
          color={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          data-tip="NextJS"
        />
      </TechContent>
      <TechContent hasVite={hasVite}>
        <img src={logoViteJS} data-tip="ViteJS" />
      </TechContent>
      <TechContent hasVercel={hasVercel}>
        <SiVercel
          color={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          data-tip="Vercel"
        />
      </TechContent>
      <TechContent hasNetlify={hasNetlify}>
        <SiNetlify color={"#37A4B2"} data-tip="Netlify" />
      </TechContent>
      <TechContent hasReactNative={hasReactNative}>
        <TbBrandReactNative color={"#01A0C8"} data-tip="React Native" />
      </TechContent>
      <TechContent hasTypescript={hasTypescript}>
        <SiTypescript color={"#2F72BC"} data-tip="TypeScript" />
      </TechContent>
      <TechContent hasStyledComponents={hasStyledComponents}>
        <SiStyledcomponents color={"#EBAC9D"} data-tip="Styled Components" />
      </TechContent>
      <TechContent hasSCSS={hasSCSS}>
        <SiCss3 color={"#C26192"} data-tip="SCSS" />
      </TechContent>
      <TechContent hasGraphQL={hasGraphQL}>
        <SiGraphql color={"#D932A2"} data-tip="GraphQL" />
      </TechContent>
      <TechContent hasRedux={hasRedux}>
        <SiRedux color={"#7248B7"} data-tip="Redux" />
      </TechContent>
      <TechContent hasFirebase={hasFirebase}>
        <SiFirebase color={"#F7C52F"} data-tip="Firebase" />
      </TechContent>
      <TechContent hasJest={hasJest}>
        <SiJest color={"#BC3A14"} data-tip="Jest" />
      </TechContent>
      <TechContent hasNodeJS={hasNodeJS}>
        <SiNodedotjs color={"#529F41"} data-tip="NodeJS" />
      </TechContent>
      <TechContent hasExpress={hasExpress}>
        <SiExpress color={"#7B7B7B"} data-tip="Express" />
      </TechContent>
      <TechContent hasMongoDB={hasMongoDB}>
        <SiMongodb color={"#3E9738"} data-tip="MongoDB" />
      </TechContent>
      <TechContent hasJWT={hasJWT}>
        <img src={logoJWT} data-tip="JWT" />
      </TechContent>
      <TechContent hasHeroku={hasHeroku}>
        <SiHeroku color={"#3E0094"} data-tip="Heroku" />
      </TechContent>
      <TechContent hasRubyOnRails={hasRubyOnRails}>
        <SiRubyonrails color={"#C20000"} data-tip="Ruby on Rails" />
      </TechContent>
      <TechContent hasBootstrap={hasBootstrap}>
        <SiBootstrap color={"#7011EB"} data-tip="BootStrap" />
      </TechContent>
    </TechsContainer>
  );
}
