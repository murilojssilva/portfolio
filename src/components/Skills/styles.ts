import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow: 0 0 1em ${(props) => props.theme.colors.backgroundItens};
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
