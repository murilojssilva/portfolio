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
            <SiReact color={"#5CCFEE"} />
          </TechLogo>
          <TechLogo>
            <SiTypescript color={"#2F72BC"} />
          </TechLogo>
          <TechLogo>
            <SiStyledcomponents color={"#EBAC9D"} />
          </TechLogo>
          <TechLogo>
            <SiGraphql color={"#D932A2"} />
          </TechLogo>
          <TechLogo>
            <SiJest color={"#BC3A14"} />
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
            <SiReact color={"#5CCFEE"} />
          </TechLogo>
          <TechLogo>
            <SiStyledcomponents color={"#EBAC9D"} />
          </TechLogo>
          <TechLogo>
            <SiNodedotjs color={"#529F41"} />
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
            <SiRubyonrails color={"#C20000"} />
          </TechLogo>
          <TechLogo>
            <SiBootstrap color={"#7011EB"} />
          </TechLogo>
        </UsedTechs>
      </ExperienceContent>
    </ExperienceContainer>
  );
}
