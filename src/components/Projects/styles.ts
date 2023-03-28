import styled from "styled-components";

export const ProjectsContainer = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
