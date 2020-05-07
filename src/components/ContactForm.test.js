import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders without errors', () => {
  render(<ContactForm />)
})

test('form can be filled in and submitted', () => {

  const { getByLabelText, getByText, getByTestId, getByPlaceholderText } = render(<ContactForm />)

  const firstNameInput = getByPlaceholderText(/Edd/)
  const lastNameInput = getByPlaceholderText(/Burke/)
  const emailInput = getByTestId(/emailid/i)
  const messageInput = getByTestId(/messageid/i)

  fireEvent.change(firstNameInput, { target: {value: 'Bob'}})
  fireEvent.change(lastNameInput, { target: {value: 'Steve'}})
  fireEvent.change(emailInput, { target: {value: 'Bob@bob.com'}})
  fireEvent.change(messageInput, { target: { value: 'hello' } })

  const button = getByTestId(/submit-button/i)

  fireEvent.click(button)

  const bob = getByPlaceholderText(/Edd/)
  const steve = getByPlaceholderText(/Burke/)
  const emailBob = getByTestId(/emailid/i)
  const messageBob = getByTestId(/messageid/i)

  expect(bob).toBeInTheDocument()
  expect(steve).toBeInTheDocument()
  expect(emailBob).toBeInTheDocument()
  expect(messageBob).toBeInTheDocument()

})