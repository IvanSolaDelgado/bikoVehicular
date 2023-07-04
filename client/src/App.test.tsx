import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import App from './App'
import { gifsFixture } from './fixtures/gifs'
import { server } from './mocks/server'

describe('listado de gifs', () => {
  it('muestra los gifs en pantalla con texto alternativo', async () => {
    render(<App />)

    for (const gif of gifsFixture) {
      expect(await screen.findByAltText(gif.name)).toBeVisible()
    }
  })

  it('muestra un texto de carga mientras los gifs estan cargando y desaparece cuando ya han cargado', async () => {
    render(<App />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })
  })

  it('muestra un mensaje avisando que no tenemos gifs para mostrar', async () => {
    server.use(
      rest.get('http://localhost:3000/api/gifs', (req, res, ctx) => {
        return res(ctx.json([]))
      }),
    )

    render(<App />)

    expect(
      await screen.findByText('Sorry, gifs not found :/'),
    ).toBeInTheDocument()
  })

  it('recibe un input al clicar el boton de busqueda', async () => {})
})
