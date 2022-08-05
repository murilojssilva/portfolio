import styled from "styled-components";

export const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  min-height: 80vh;

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    border-radius: 50px;
    box-shadow: 0 0 1em ${(props) => props.theme.colors.backgroundItens};
    align-items: center;
    align-self: center;
    &:hover {
      border: 1px solid ${(props) => props.theme.colors.backgroundItens};
    }
    select,
    textarea {
      width: 60vw;
      margin: 1rem 0;
      padding: 1rem;
      background-color: transparent;
      border: 0;
      outline: 0;
      border-bottom: 2px solid ${(props) => props.theme.colors.backgroundItens};
      &:focus {
        border-bottom: 2px solid ${(props) => props.theme.colors.secundary};
      }
      color: ${(props) => props.theme.colors.text};
    }
    textarea {
      resize: none;
      height: 20rem;
    }
  }
`;

export const ButtonSendEmailContainer = styled.div`
  margin: 1rem 0;
`;

export const ContactItemsContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  input {
    margin: 1rem;
    width: 28vw;
    padding: 1rem;
    gap: 1rem;
    background-color: transparent;
    border: 0;
    outline: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.backgroundItens};
    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.secundary};
    }
    color: ${(props) => props.theme.colors.text};
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    input {
      width: 60vw;
    }
  }
`;
