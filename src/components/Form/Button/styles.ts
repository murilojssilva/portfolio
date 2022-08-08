import styled from "styled-components";

interface ButtonContainerProps {
  hasLink?: boolean;
  hasDeploy?: boolean;
  deploy?: string;
}

export const ButtonContainer = styled.a<ButtonContainerProps>`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  svg {
    color: ${(props) => props.theme.colors.text};
  }
  padding: 1rem;
  font-weight: bold;
  display: block;

  display: ${(props) =>
    props.hasLink === false && props.hasDeploy === false ? "none" : "flex"};
  text-align: center;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  cursor: pointer;

  transition: background-color 0.1s, color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    svg {
      color: ${(props) => props.theme.colors.background};
    }
  }
  width: 100%;
`;
