import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { SubmitButton } from '../../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(UserContext)
  return (
    <>
      <h1>Soy User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </>
  )
}
