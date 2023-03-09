import { TechContent, TechsContainer } from "./styles";
import { TbBrandReactNative } from "react-icons/tb";

import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpo,
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
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import logoJWT from "../../../assets/jwt.svg";
import logoViteJS from "../../../assets/vitejs.svg";
import logoFaunaDB from "../../../assets/faunadb.svg";
import logoAxios from "../../../assets/axios.svg";
import logoZod from "../../../assets/zod.svg";
import logoVictory from "../../../assets/victory.svg";
import logoPhosphor from "../../../assets/phosphor.svg";
import logoYup from "../../../assets/yup.svg";
import logoStripe from "../../../assets/stripe.svg";
import logoVue from "../../../assets/vue.svg";
import logoAsyncStorage from "../../../assets/AsyncStorage.png";

import { useTheme } from "styled-components";

export interface TechsProps {
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasHeroku?: boolean;
  hasJavascript?: boolean;
  hasStyledComponents?: boolean;
  hasSCSS?: boolean;
  hasSASS?: boolean;
  hasGraphQL?: boolean;
  hasStripe?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasVercel?: boolean;
  hasMongoDB?: boolean;
  hasJWT?: boolean;
  hasNextJS?: boolean;
  hasVite?: boolean;
  hasRadix?: boolean;
  hasExpo?: boolean;
  hasChakra?: boolean;
  hasVue?: boolean;
  hasAxios?: boolean;
  hasAsyncStorage?: boolean;
  hasFaunaDB?: boolean;
  hasYup?: boolean;
  hasVictoryNative?: boolean;
  hasPhosphor?: boolean;
  hasZod?: boolean;
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
  hasStripe,
  hasSCSS,
  hasSASS,
  hasJest,
  hasVercel,
  hasNextJS,
  hasVite,
  hasPhosphor,
  hasRadix,
  hasExpo,
  hasChakra,
  hasVue,
  hasFaunaDB,
  hasAxios,
  hasAsyncStorage,
  hasYup,
  hasVictoryNative,
  hasZod,
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
      <TechContent hasVue={hasVue}>
        <img src={logoVue} data-tip="Vue.JS" />
      </TechContent>
      <TechContent hasNextJS={hasNextJS}>
        <SiNextdotjs
          color={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          data-tip="NextJS"
        />
      </TechContent>
      <TechContent hasExpo={hasExpo}>
        <SiExpo
          color={theme.title === "dark" ? "#BBC3CD" : "var(--gray-950)"}
          data-tip="Expo"
        />
      </TechContent>
      <TechContent hasChakra={hasChakra}>
        <SiChakraui color={"#49C6C0"} data-tip="ChakraUI" />
      </TechContent>
      <TechContent hasYup={hasYup}>
        <img src={logoYup} data-tip="Yup" />
      </TechContent>
      <TechContent hasVictoryNative={hasVictoryNative}>
        <img src={logoVictory} data-tip="Victory Pie" />
      </TechContent>
      <TechContent hasVite={hasVite}>
        <img src={logoViteJS} data-tip="ViteJS" />
      </TechContent>
      <TechContent hasFaunaDB={hasFaunaDB}>
        <img src={logoFaunaDB} data-tip="FaunaDB" />
      </TechContent>
      <TechContent hasAxios={hasAxios}>
        <img src={logoAxios} data-tip="Axios" />
      </TechContent>
      <TechContent hasAsyncStorage={hasAsyncStorage}>
        <img src={logoAsyncStorage} data-tip="Async Storage" />
      </TechContent>
      <TechContent hasRadix={hasRadix}>
        <svg
          data-tip="Radix UI"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
        >
          <path
            d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
            fill={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          ></path>
          <path
            d="M12 0H4V8H12V0Z"
            fill={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          ></path>
          <path
            d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
            fill={theme.title === "dark" ? "#F2F2F2" : "var(--gray-950)"}
          ></path>
        </svg>
      </TechContent>
      <TechContent hasPhosphor={hasPhosphor}>
        <img src={logoPhosphor} data-tip="Phosphor" />
      </TechContent>
      <TechContent hasZod={hasZod}>
        <img src={logoZod} data-tip="Zod" />
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
      <TechContent hasSASS={hasSASS}>
        <SiSass color={"#C26192"} data-tip="SASS" />
      </TechContent>
      <TechContent hasGraphQL={hasGraphQL}>
        <SiGraphql color={"#D932A2"} data-tip="GraphQL" />
      </TechContent>
      <TechContent hasStripe={hasStripe}>
        <img src={logoStripe} data-tip="Stripe" />
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
