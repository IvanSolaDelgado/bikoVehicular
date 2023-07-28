import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import App from './App'
import { gifsFixture } from './fixtures/gifs'
import { server } from './mocks/server'
import { BrowserRouter as Router } from 'react-router-dom'

describe('listado de gifs', () => {
  it('muestra los gifs en pantalla con texto alternativo', async () => {
    render(
      <Router>
        <App />
      </Router>,
    )

    for (const gif of gifsFixture) {
      expect(await screen.findByAltText(gif.name)).toBeVisible()
    }
  })

  it('muestra un texto de carga mientras los gifs estan cargando y desaparece cuando ya han cargado', async () => {
    render(
      <Router>
        <App />
      </Router>,
    )
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

    render(
      <Router>
        <App />
      </Router>,
    )
    expect(
      await screen.findByText('Sorry, gifs not found :/'),
    ).toBeInTheDocument()
  })
})
