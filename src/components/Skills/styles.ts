import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  border-radius: 8px;
  gap: 1rem;

  box-shadow: 0 0 1em ${(props) => props.theme.colors.backgroundItens};
  @media (max-width: 1080px) {
    border-top: 5px solid transparent;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
