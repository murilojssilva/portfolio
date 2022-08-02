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
`;
