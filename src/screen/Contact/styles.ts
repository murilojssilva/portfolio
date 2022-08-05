import styled from "styled-components";

export const ContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem 0;
  border-radius: 8px;
  min-height: 80vh;
  width: 80vw;
  border-top: 5px solid ${(props) => props.theme.colors.primary};

  box-shadow: 0 0 1em ${(props) => props.theme.colors.backgroundItens};

  label {
    display: flex;
    flex-direction: column;
    span {
      color: var(--red-500);
    }
    p {
      color: ${(props) => props.theme.colors.secundary};
    }
  }
  textarea {
    width: 60vw;
    margin: 1rem 0;
    padding: 1rem;
    background-color: transparent;
    border-radius: 8px;
    outline: 0;
    border: 2px solid transparent;
    border-radius: 8px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    &:focus {
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
    color: ${(props) => props.theme.colors.text};
    resize: none;
    height: 15rem;
  }
  input {
    margin: 1rem;
    width: 28vw;
    padding: 1rem;
    gap: 1rem;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    &:focus {
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
    color: ${(props) => props.theme.colors.text};
    @media (max-width: 768px) {
      width: 60vw;
    }
  }
  button {
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    font-weight: bold;
    display: block;

    display: flex;
    text-align: center;
    justify-content: center;

    gap: 0.5rem;

    cursor: pointer;

    transition: background-color 0.1s, color 0.1s;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    }
  }
  select {
    width: 60vw;
    margin: 1rem 0;
    padding: 1rem;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 8px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ContactItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
