import styled from "styled-components";

export const ExperienceContainer = styled.section`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-900) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
