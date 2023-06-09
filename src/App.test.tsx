import { render, screen } from '@testing-library/react'
import App from './App'

describe('listado de gifs', () => {
  it('muestra los gifs en pantalla con texto alternativo', async () => {
    render(<App />)

    expect(await screen.findByRole('img', { name: 'perro loco' })).toBeVisible()
    expect(await screen.findByRole('img', { name: 'gato loco' })).toBeVisible()
  })
})
