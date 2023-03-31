import styled, { css } from 'styled-components'

export const FooterIconContainer = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.background};

  span {
    padding: 1rem;
    margin: 0 5px;
    border-radius: 8px;
    border-radius: 100px;
    display: flex;
    padding: 1rem;
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.text};
      color: ${theme.colors.text};
    `};

    &:hover {
      ${({ theme }) => css`
        color: ${theme.colors.background};
        background-color: ${theme.colors.text};
      `};
    }
    svg {
      width: 1rem;
      height: 1rem;
      align-items: center;
    }
  }
`
