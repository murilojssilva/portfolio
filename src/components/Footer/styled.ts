import styled from "styled-components";

export const FooterContacts = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
  div {
    padding: 1rem 0;
    border-top: 1px solid ${(props) => props.theme.colors.background};

    span {
      padding: 1rem;
      margin: 0 10px;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.text};

      display: flex;
      padding: 1rem;
      color: ${(props) => props.theme.colors.text};
      border-radius: 100px;

      &:hover {
        color: ${(props) => props.theme.colors.background};
        background-color: ${(props) => props.theme.colors.text};
      }
      svg {
        width: 1rem;
        height: 1rem;
        align-items: center;
      }
    }
  }
`;
