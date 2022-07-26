import {
  SiBootstrap,
  SiGraphql,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiRubyonrails,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import {
  ExperienceContainer,
  ExperienceContent,
  TechLogo,
  UsedTechs,
} from "./styles";

export function Experience() {
  return (
    <ExperienceContainer>
      <h1>{"<Experiências />"}</h1>
      <ExperienceContent>
        <h2>Upnid Pagamentos</h2>
        <span>Desenvolvedor Front End</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          doloribus hic soluta, commodi fuga unde harum aspernatur laboriosam
          neque assumenda repellat est ducimus tempora laudantium cum, omnis
          dignissimos necessitatibus quis.
        </p>
        <UsedTechs>
          <TechLogo>
            <SiReact color={"#5CCFEE"} data-tip="ReactJS" />
          </TechLogo>
          <TechLogo>
            <SiTypescript color={"#2F72BC"} data-tip="TypeScript" />
          </TechLogo>
          <TechLogo>
            <SiStyledcomponents
              color={"#EBAC9D"}
              data-tip="Styled Components"
            />
          </TechLogo>
          <TechLogo>
            <SiGraphql color={"#D932A2"} data-tip="GraphQL" />
          </TechLogo>
          <TechLogo>
            <SiJest color={"#BC3A14"} data-tip="Jest" />
          </TechLogo>
        </UsedTechs>
      </ExperienceContent>
      <ExperienceContent>
        <h2>ResolveLogo</h2>
        <span>Desenvolvedor Full Stack</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          doloribus hic soluta, commodi fuga unde harum aspernatur laboriosam
          neque assumenda repellat est ducimus tempora laudantium cum, omnis
          dignissimos necessitatibus quis.
        </p>
        <UsedTechs>
          <TechLogo>
            <SiReact color={"#5CCFEE"} data-tip="ReactJS" />
          </TechLogo>
          <TechLogo>
            <SiStyledcomponents
              color={"#EBAC9D"}
              data-tip="Styled Components"
            />
          </TechLogo>
          <TechLogo>
            <SiNodedotjs color={"#529F41"} data-tip="NodeJS" />
          </TechLogo>
        </UsedTechs>
      </ExperienceContent>
      <ExperienceContent>
        <h2>Universidade do Estado do Rio de Janeiro</h2>
        <span>Desenvolvedor Full Stack</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          doloribus hic soluta, commodi fuga unde harum aspernatur laboriosam
          neque assumenda repellat est ducimus tempora laudantium cum, omnis
          dignissimos necessitatibus quis.
        </p>
        <UsedTechs>
          <TechLogo>
            <SiRubyonrails color={"#C20000"} data-tip="Ruby on Rails" />
          </TechLogo>
          <TechLogo>
            <SiBootstrap color={"#7011EB"} data-tip="BootStrap" />
          </TechLogo>
        </UsedTechs>
      </ExperienceContent>
    </ExperienceContainer>
  );
}
