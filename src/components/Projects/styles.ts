import styled from "styled-components";

interface ProjectTitleProps {
  color: "challenge" | "personal" | "extension";
}

export const ProjectsContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--purple-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul > li {
    border-top: 5px solid var(--green-500);
    margin: 2rem;
    font-size: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 8px;
    list-style: none;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.text};
    }
    a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
    }
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
  span {
    font-size: 0.875rem;
    color: ${(props) =>
      props.color === "challenge"
        ? "var(--blue-500)"
        : props.color === "personal"
        ? "var(--green-500)"
        : props.color === "extension"
        ? "var(--yellow-500)"
        : "var(--red-500)"};
    font-weight: bold;
  }
`;

export const UsedTechs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechLogo = styled.span`
  svg {
    display: block;
    border-radius: 8px;
    margin: 0.5rem;

    width: 2rem;
    height: 2rem;

    transition: color 0.1s;

    &:hover {
      color: var(--green-500);
    }
  }
`;
