import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NoRegisterUser } from '../pages/NoRegisterUser'
import { UserContext } from '../context/UserContext'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotFound } from '../pages/NotFound/NotFound'

export const Router = () => {
  const { isAuth } = useContext(UserContext)
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route exact path='/detail' element={<Detail />} />
        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate to='/login' />} />
        <Route exact path='/login' element={!isAuth ? <NoRegisterUser /> : <Navigate to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
