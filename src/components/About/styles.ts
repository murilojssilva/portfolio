import styled from "styled-components";

export const AboutContainer = styled.main`
  h1 {
    margin: 2rem;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.title};
  }
  p {
    margin: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
