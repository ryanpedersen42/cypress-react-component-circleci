import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('Button', () => {
  mount(<Button>A simple button</Button>)
  cy.get('button').contains('A simple button').click()
})