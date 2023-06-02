import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { server } from './mocks/server'
import { rest } from 'msw'

it('muestra un giff en pantalla', async () => {
  const aGif = {
    name: 'anAlternativeText',
    imgUrl: 'irrelevantImageUrl',
  }
  //crear un gif aGif con texto alternativo anAlternativeText
  server.use(
    rest.get('http://localhost:3000/api/gifs', (req, res, ctx) => {
      return res(ctx.json([aGif]))
    }),
  )
  render(<App />)
  //Aquí busco por texto alternativo "anAlternativeText" que sea visible
  expect(await screen.findByAltText('anAlternativeText')).toBeVisible()
})
