import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import ReactTooltip from 'react-tooltip'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './hooks/usePersistedState'
import { ProfileProvider } from './contexts/ProfileContext'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ProfileProvider>
          <Router toggleTheme={toggleTheme} />
        </ProfileProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ReactTooltip />
    </ThemeProvider>
  )
}
