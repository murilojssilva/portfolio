import styled from "styled-components";

interface ProjectTitleProps {
  color: "challenge" | "personal" | "academic";
}

export const ProjectsContainer = styled.section`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  h1 {
    background: linear-gradient(
      to right,
      var(--green-200) 0%,
      var(--green-500) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectTitle = styled.div<ProjectTitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 1.5rem;
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-500) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
