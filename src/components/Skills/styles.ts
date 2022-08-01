import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--gray-900);
  border-radius: 8px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
