import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disabled, onClick, type = 'button' }) => {
  return (<Button disabled={disabled} type={type} onClick={onClick}>{children}</Button>)
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node
}
