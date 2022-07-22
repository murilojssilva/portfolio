import styled from "styled-components";

export const SkillsContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  padding: 0.5rem;
  margin: 3rem;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 50px 1fr;

  border: 1px solid ${(props) => props.theme.colors.title};

  svg {
    margin: auto;
    display: block;
  }
  div {
    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.title};
    }
    p {
      color: ${(props) => props.theme.colors.text};
      font-size: 0.875rem;
    }
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 80px 1fr;
  }
`;
