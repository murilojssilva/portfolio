import styled, { css } from "styled-components";

import { IButtonContainerProps } from "@/interfaces/IButtonProps";

export const ButtonContainer = styled.a<IButtonContainerProps>`
  border-radius: 8px;
  background-color: transparent;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.text};
    color: ${theme.colors.text};
  `};

  svg {
    color: ${({ theme }) => theme.colors.text};
  }
  padding: 1rem;
  font-weight: bold;
  display: block;

  display: ${({ hasLink, hasDeploy }) =>
    hasLink === false && hasDeploy === false ? "none" : "flex"};
  text-align: center;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  cursor: pointer;

  transition: background-color 0.1s, color 0.1s;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.background};
    `};

    svg {
      color: ${({ theme }) => theme.colors.background};
    }
  }
  width: 100%;
`;
