import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.backgroundItens};
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 1rem;
    text-align: center;
    a {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      border-bottom: 1px solid transparent;
      color: ${(props) => props.theme.colors.text};

      :hover {
        background-color: ${(props) => props.theme.colors.backgroundItens};
      }

      &.active {
        color: ${(props) => props.theme.colors.primary};
        border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      }
      @media (max-width: 768px) {
        span {
          display: none;
        }
      }
    }
  }
  button {
    border: none;
    background-color: transparent;
  }
`;
