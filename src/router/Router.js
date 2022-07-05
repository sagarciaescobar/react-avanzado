import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NoRegisterUser } from '../pages/NoRegisterUser'
import { UserContext } from '../context/UserContext'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'

export const Router = () => {
  const { isAuth } = useContext(UserContext)
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/favs' element={isAuth ? <Favs /> : <NoRegisterUser />} />
        <Route path='/user' element={isAuth ? <User /> : <NoRegisterUser />} />
      </Routes>
    </>
  )
}
