import styled from 'styled-components'

export const PublicationsContainer = styled.main`
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`

export const PublicationsContent = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
