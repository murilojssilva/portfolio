import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid transparent;

  box-shadow: 0 0 1em ${(props) => props.theme.colors.backgroundItens};
  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
