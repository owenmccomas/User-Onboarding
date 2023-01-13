import React from 'react'
import App from './App'
import Form from './components/Form'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })

  const fnameInput = () => cy.get('input[name=fname]')
  const lnameInput = () => cy.get('input[name=lname]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')
  const tosInput = () => cy.get('input[name=terms]')

  it('sanity test', () => {
    expect(true).to.equal(true)
  })

  it('types in first and last name', () => {
    fnameInput().type('Owen')
    lnameInput().type('McComas')
    fnameInput().should('have.value')
    lnameInput().should('have.value')
  })

  it('types in email and password', () => {
    emailInput().type('email@email.gov')
    passwordInput().type('password1234')
  })
  it('checks tos box', () => {
    tosInput().click()
  })
  it('submits', () => {
    cy.contains('password1234').siblings('button:nth-of-type(2)').click()
  })
  it('checks if form is emptyafter submit', () => {
    fnameInput().should('not.have.value')
    lnameInput().should('not.have.value')
    emailInput().should('not.have.value')
    passwordInput().should('not.have.value')
    tosInput().should('not.have.value')

  })




}) 