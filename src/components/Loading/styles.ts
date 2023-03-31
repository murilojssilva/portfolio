import styled from 'styled-components'

export const LoadingContainer = styled.section`
  width: 100vw;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes icon-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: icon-spin 2s infinite linear;
    color: ${({ theme }) => theme.colors.secundary};
  }
`
