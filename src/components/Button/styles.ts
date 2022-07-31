import styled from "styled-components";

interface ButtonContainerProps {
  hasLink: boolean;
}

export const ButtonContainer = styled.a<ButtonContainerProps>`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;
  font-weight: bold;
  display: block;

  display: ${(props) => (props.hasLink === false ? "none" : "flex")};
  text-align: center;
  justify-content: center;

  gap: 0.5rem;

  cursor: pointer;

  transition: background-color 0.1s, color 0.1s;

  &:hover {
    background-color: var(--green-500);
    border: 1px solid var(--green-500);
    color: var(--shape);
  }
`;
