import styled from "styled-components";

export const AboutContainer = styled.main`
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--purple-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.125rem;
    font-style: unset;
  }
`;
