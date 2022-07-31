import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: ${(props) => props.theme.colors.backgroundItens};

  border-radius: 8px;
  height: 100%;

  position: relative;
  overflow: auto;
  z-index: 1;
  h1 {
    margin: 2rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem;
  }
`;
