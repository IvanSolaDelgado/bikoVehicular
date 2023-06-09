import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { gifsFixture } from './fixtures/gifs'

describe('listado de gifs', () => {
  it('muestra los gifs en pantalla con texto alternativo', async () => {
    render(<App />)

    for (const gif of gifsFixture) {
      expect(await screen.findByRole('img', { name: gif.name })).toBeVisible()
    }
  })

  it('muestra un texto de carga mientras los gifs estan cargando y desaparece cuando ya han cargado', async () => {
    render(<App />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })
  })
})
