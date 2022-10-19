import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { dateFormatter } from "../../utils/formatter";
import { Cards } from "../Cards";

import { ProjectsContainer, ProjectsContent } from "./styles";

export function Projects() {
  const { repositories } = useContext(ProfileContext);

  return (
    <ProjectsContainer>
      <h1>{"<Projetos>"}</h1>
      <ProjectsContent>
        {repositories.map((repository) => (
          <div key={repository.name}>
            <Cards
              colorTop="projects"
              type="challenge"
              title={repository.name}
              stack="frontend"
              last_commit={dateFormatter.format(new Date(repository.pushed_at))}
              hasLink
              iconButton={"GitHub"}
              href={repository.html_url}
            />
          </div>
        ))}
      </ProjectsContent>
      <h1>{"</Projetos>"}</h1>
    </ProjectsContainer>
  );
}
