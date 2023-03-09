import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1200px) {
    border-top: 5px solid transparent;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
