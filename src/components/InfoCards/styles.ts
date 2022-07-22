import styled from "styled-components";

export const InfoCardsContainer = styled.main`
  background-color: ${(props) => props.theme.colors.backgroundItens};

  border-radius: 8px;
  overflow: hidden;
  h1 {
    margin: 2rem;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.title};
  }
  p {
    margin: 2rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
