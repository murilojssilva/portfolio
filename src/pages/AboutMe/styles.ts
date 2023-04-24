import styled from "styled-components";

export const AboutMeContainer = styled.main`
    padding: 1rem;
    article {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.5rem;
    }
  }
`