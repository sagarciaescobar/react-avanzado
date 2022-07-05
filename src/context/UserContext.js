import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      setAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer
