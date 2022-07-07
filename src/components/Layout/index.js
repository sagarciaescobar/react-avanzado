import React from 'react'

import { Helmet } from 'react-helmet'
import { Div, Title, SubTitle } from './styles'
import PropTypes from 'prop-types'

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {children}
    </Div>
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node
}
