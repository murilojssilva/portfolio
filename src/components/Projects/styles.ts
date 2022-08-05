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
      var(--green-800) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    color: ${(props) =>
      props.color === "challenge"
        ? "var(--blue-500)"
        : props.color === "personal"
        ? "var(--green-500)"
        : props.color === "academic"
        ? "var(--purple-500)"
        : "var(--red-500)"};
    font-weight: bold;
  }
`;

export const UsedTechs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechLogo = styled.span`
  padding: 1rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: var(--gray-900);
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
