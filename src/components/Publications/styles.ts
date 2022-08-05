import styled from "styled-components";

export const PublicationsContainer = styled.main`
  border-top: 1px solid ${(props) => props.theme.colors.background};
  h1 {
    background: linear-gradient(
      to right,
      var(--purple-200) 0%,
      var(--purple-500) 50%,
      var(--purple-700) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
