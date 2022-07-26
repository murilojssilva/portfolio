import styled from "styled-components";

export const ExperienceContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  ul > li {
    margin: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--purple-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ExperienceContent = styled.div`
  border-top: 5px solid var(--blue-700);
  margin: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  h2 {
    font-size: 1.5rem;
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const UsedTechs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechLogo = styled.span`
  svg {
    border-radius: 8px;
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.1s;
    margin: 1rem 0.5rem;

    &:hover {
      background-color: var(--gray-900);
    }
  }
`;
