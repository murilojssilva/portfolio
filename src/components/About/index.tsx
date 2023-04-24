import { useContext } from 'react'

import { AboutContainer, AboutContent, AboutTitleContainer, InformationsContainer } from './styles'

import { Loading } from '../Loading'

import { ProfileContext } from '@/contexts/ProfileContext'
import { AboutMe } from '@/pages/AboutMe'

export function About() {
  const { data, loading } = useContext(ProfileContext)
  return (
    <AboutContainer>
      <AboutTitleContainer>
        <h1>Murilo Silva</h1>
        
      </AboutTitleContainer>
      <AboutContent>
        {loading ? (
          <Loading />
        ) : (
          <>
            <InformationsContainer>
              <h1>Olá 👋. Este é o portfólio do {data.name}.</h1>
              <ul>
                <li>Cientista da Computação - Universidade do Estado do Rio de Janeiro</li>
                <li>Front End Developer JavaScript | React.JS | Node.JS | React Native</li>
              </ul>
              <a href="/about">Saiba mais</a>
            </InformationsContainer>
            
            <img src={`https://github.com/${data.login}.png`} />
          </>
        )}
      </AboutContent>
    </AboutContainer>
  )
}
