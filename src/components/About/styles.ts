import styled, { css } from 'styled-components'
import backgroundDarkImage from '../../assets/backgroundDark.gif'
import backgroundLightImage from '../../assets/backgroundLight.gif'
import { keyframes } from "styled-components";
import { LayoutContainer } from '@/pages/_layouts/default/styles'

const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const AboutContainer = styled(LayoutContainer)``

export const AboutTitleContainer = styled.div`
  background: url(${({ theme }) => theme.title === 'dark' ? backgroundDarkImage : backgroundLightImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;

  padding: 16px;
  
  min-height: 91vh;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    background-image: -webkit-linear-gradient(92deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secundary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 8rem;
    text-align: center;
  }
  
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  ul li {
    font-size: 1.25rem;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4rem;
    font-size: 22px;
    font-family: tahoma;
    border:none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #f5f5f5;
    cursor:pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const AboutContent = styled.header`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  img {
    width: calc(20rem + 12px);
    height: calc(20rem + 12px);
    border-radius: 8px;
    ${({ theme }) => css`
      border: 4px solid ${theme.colors.backgroundItens};
      outline: 2px solid ${theme.colors.text};
    `};

    margin: 1rem 0;
  }

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }
`

export const AboutProfileAnimation = styled(CenterContainer)`
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`

export const DevelopmentIcon = styled(CenterContainer)``
