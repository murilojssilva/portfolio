import { FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { Button } from "../Button";
import { ProjectsContainer, ProjectTitle, TechLogo, UsedTechs } from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>{"<Projetos />"}</h1>
      <ul>
        <li>
          <ProjectTitle color="personal">
            <h2>ResolveLogo (Front End)</h2>
            <span>pessoal</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiReact />
            </TechLogo>
            <TechLogo>
              <SiStyledcomponents />
            </TechLogo>
            <TechLogo>
              <SiRedux />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/resolvelogofrontend"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
        <li>
          <ProjectTitle color="personal">
            <h2>ResolveLogo (Back End)</h2>
            <span>pessoal</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiNodedotjs />
            </TechLogo>
            <TechLogo>
              <SiExpress />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/resolvelogobackend"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
        <li>
          <ProjectTitle color="challenge">
            <h2>Desafio TruckPag</h2>
            <span>desafio</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiReact />
            </TechLogo>
            <TechLogo>
              <SiStyledcomponents />
            </TechLogo>
            <TechLogo>
              <SiTypescript />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/desafio-truckpag"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
        <li>
          <ProjectTitle color="challenge">
            <h2>Desafio Vizir</h2>
            <span>desafio</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiReact />
            </TechLogo>
            <TechLogo>
              <SiStyledcomponents />
            </TechLogo>
            <TechLogo>
              <SiTypescript />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/desafio-vizir"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
        <li>
          <ProjectTitle color="challenge">
            <h2>Intelie Chart</h2>
            <span>desafio</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiReact />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/intelie-chart"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
        <li>
          <ProjectTitle color="challenge">
            <h2>Pokemon Intelie</h2>
            <span>desafio</span>
          </ProjectTitle>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            adipisci qui eligendi vitae voluptatibus exercitationem repudiandae
            explicabo dolorem quaerat nisi sit ex ullam nam, ipsa natus iste
            itaque fugit delectus.
          </p>

          <UsedTechs>
            <TechLogo>
              <SiReact />
            </TechLogo>
          </UsedTechs>

          <Button
            target="_blank"
            href="https://github.com/murilojssilva/pokemon-intelie"
            icon={FaGithub}
            content="Visualizar projeto"
          />
        </li>
      </ul>
    </ProjectsContainer>
  );
}
