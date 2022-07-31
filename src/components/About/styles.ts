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
    font-style: unset;
  }
`;

export const AboutContent = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundItens};
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  overflow: hidden;
`;

export const HeaderAbout = styled.div`
  article p {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-style: unset;
  }
`;

export const AboutProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: calc(5rem + 12px);
    height: calc(5rem + 12px);
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.backgroundItens};
    outline: 2px solid ${(props) => props.theme.colors.text};
    margin: 1rem 0;
    align-self: center;
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    line-height: 1.6;
  }
  span {
    line-height: 1.6;
  }
`;

export const SocialMediaIcons = styled.div`
  margin-top: 0.5rem;
  display: flex;

  justify-content: center;

  a {
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    margin: 0 0.5rem;
    &:hover {
      background-color: var(--gray-950);
      border-radius: 8px;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const AboutContacts = styled.main`
  > div {
    padding: 1rem 0;
    border-top: 1px solid ${(props) => props.theme.colors.background};
    display: grid;
    grid-template-columns: 50px 1fr;

    svg {
      color: ${(props) => props.theme.colors.text};
      margin: auto;
      display: block;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: flex-end;
      line-height: 1.4;
      margin: 0 1rem;

      h3 {
        background: linear-gradient(
          to right,
          var(--blue-200) 0%,
          var(--blue-500) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      a {
        color: ${(props) => props.theme.colors.text};
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &:first-child {
      margin-top: 1.5rem;
    }
  }
`;

export const HeaderFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.background};

  padding: 1.5rem 2rem 2rem;
`;
