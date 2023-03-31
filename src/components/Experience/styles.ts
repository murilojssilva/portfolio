import styled from 'styled-components'

export const ExperienceContainer = styled.section``

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`
