import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: ${(props) => props.theme.colors.backgroundItens};
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  overflow: hidden;
`;

export const SidebarProfile = styled.div`
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
    font-size: 0.875rem;
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
      background-color: var(--gray-900);
      border-radius: 8px;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const SidebarContacts = styled.main`
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
      align-items: center;
      line-height: 1.4;

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
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-self: center;
        text-align: center;
      }
    }
    &:first-child {
      margin-top: 1.5rem;
    }
  }
`;

export const SidebarFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.background};

  padding: 1.5rem 2rem 2rem;
`;
