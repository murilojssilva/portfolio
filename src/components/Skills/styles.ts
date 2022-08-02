import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.backgroundItens};
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
