import { Routes, Route } from 'react-router-dom'

import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'

import { DefaultLayout } from '@/pages/_layouts/default'

interface RouterProps {
  toggleTheme(): void
}

export function Router({ toggleTheme }: RouterProps) {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout toggleTheme={toggleTheme} />}>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}
