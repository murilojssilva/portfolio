import styled from "styled-components";

export const ExperienceContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  ul > li {
    margin: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
