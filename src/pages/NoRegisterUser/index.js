import React, { useContext } from 'react'
import { UserForm } from '../../components/UserForm'
import { UserContext } from '../../context/UserContext'
import { useLoginMutation } from '../../hooks/useLoginMutation'
import { useRegisterMutation } from '../../hooks/useRegisterMutation'

export const NoRegisterUser = () => {
  const { activateAuth } = useContext(UserContext)
  const { register, registerLoading, registerError } = useRegisterMutation()
  const { login, loginLoading, loginError } = useLoginMutation()

  const onRegister = (input) => {
    register({ variables: { input } })
      .then(({ data }) => {
        activateAuth(data.signup)
      })
      .catch(e => console.log(e))
  }
  const onLogin = (input) => {
    login({ variables: { input } })
      .then(({ data }) => {
        activateAuth(data.login)
      })
      .catch(e => console.log(e))
  }

  const registerMsg = registerError && 'El usuario ya existe o hay algún problema'
  const loginMsg = loginError && 'Contraseña o email incorrecto'

  return (
    <>
      <UserForm disabled={registerLoading} error={registerMsg} title='Registrarse' onSubmit={onRegister} />
      <UserForm disabled={loginLoading} error={loginMsg} title='Iniciar Sesion' onSubmit={onLogin} />
    </>
  )
}
