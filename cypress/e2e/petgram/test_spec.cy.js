/* global describe, it, cy */

describe('Petgram', () => {
  it('A ver si funciona', () => {
    cy.visit('/')
  })

  it('Navegamos entre cagtegorias', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegamos con el nav bar', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Los usuarios no registrados ven el formulario de registro', () => {
    cy.visit('/favs')
    cy.get('form')
  })
})
