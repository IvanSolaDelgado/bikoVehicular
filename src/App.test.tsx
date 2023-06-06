import { render, screen } from '@testing-library/react'
import App from './App'

it('muestra un gif en pantalla', async () => {
  render(<App />)

  expect(await screen.findByAltText('perro loco')).toBeVisible()
})
