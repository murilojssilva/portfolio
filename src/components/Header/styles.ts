import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.backgroundItens};

  button {
    border: none;
    background-color: transparent;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 3px solid transparent;
      border-bottom: 5px solid transparent;
      color: ${(props) => props.theme.colors.text};

      &:hover {
        border-bottom: 5px solid ${(props) => props.theme.colors.secundary};
      }

      &.active {
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }
`;
