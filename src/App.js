import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'

import { Router } from './router/Router'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Router />
      <NavBar />
    </BrowserRouter>
  )
}
