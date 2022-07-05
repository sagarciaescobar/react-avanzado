import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick, type = 'button' }) => {
  return (<Button disabled={disabled} type={type} onClick={onClick}>{children}</Button>)
}
