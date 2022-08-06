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

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 2rem;
      span {
        background-color: var(--red-500);
        padding: 0.5rem;
        font-size: 0.75rem;
        gap: 0.5rem;
        color: var(--shape);
        display: flex;
        align-items: center;
        border-radius: 50px;
      }
      p {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }
  textarea {
    resize: none;
    height: 15rem;
  }

  select,
  textarea,
  input,
  button {
    border-radius: 8px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    padding: 1rem;
  }

  select,
  textarea,
  input {
    width: 60vw;
    margin: 1rem;
    gap: 1rem;
    color: ${(props) => props.theme.colors.text};
    border: 2px solid transparent;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    outline: 0;
    border-radius: 8px;
    translate: border 0.2s;
    &:focus {
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  }

  button {
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};

    font-weight: bold;
    display: block;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background-color 0.1s, color 0.1s;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    }
  }
`;
