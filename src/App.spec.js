/* global cy */
import * as React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('Renders the App component', () => {
  mount(<App />)
  cy.contains(/component testing/i)
})
