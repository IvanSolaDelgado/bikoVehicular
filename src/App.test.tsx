import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('muestra el parrafo con hola biko', () => {
  render(<App />)

  expect(screen.getByText('Hola biko')).toBeInTheDocument()
})
