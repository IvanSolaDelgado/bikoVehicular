import { render, screen } from '@testing-library/react'
import App from './App'
import { gifsFixture } from './fixtures/gifs'

describe('listado de gifs', () => {
  it('muestra los gifs en pantalla con texto alternativo', async () => {
    render(<App />)

    for (const gif of gifsFixture) {
      expect(await screen.findByRole('img', { name: gif.name })).toBeVisible()
    }
  })
})
