import styled from "styled-components";

export const ExperienceContainer = styled.section`
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-900) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
