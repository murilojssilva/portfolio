import { useContext } from 'react'

import { ThemeContext, useTheme } from 'styled-components'
import { HeaderContainer, HeaderContent } from './styles'
import { FaEnvelope, FaHome, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IHeaderProps } from '@/interfaces/IHeaderProps'

export function Header({ toggleTheme }: IHeaderProps) {
  const { title } = useTheme()

  const { colors } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <nav>
          <NavLink to='/'>
            <FaHome size={20} /> <span>Home</span>
          </NavLink>
          <NavLink to='/contact'>
            <FaEnvelope size={20} /> <span>Contato</span>
          </NavLink>
          <NavLink to='/about'>
            <FaUser size={20} /> <span>Sobre</span>
          </NavLink>
        </nav>
        <button onClick={toggleTheme}>
          {title === 'light' ? (
            <FaMoon size={20} color={colors.text} />
          ) : (
            <FaSun size={20} color={colors.text} />
          )}
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
