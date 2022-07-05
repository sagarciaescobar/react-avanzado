import React from 'react'

import { Form, Error, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='email' type='email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <SubmitButton type='submit' disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
