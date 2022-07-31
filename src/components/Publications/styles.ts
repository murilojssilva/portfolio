import styled from "styled-components";

export const PublicationsContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  h1 {
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--purple-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;