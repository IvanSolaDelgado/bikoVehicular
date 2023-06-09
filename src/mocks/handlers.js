import { rest } from 'msw'
import { gifsFixture } from '../fixtures/gifs'

export const handlers = [
  rest.get('http://localhost:3000/api/gifs', (req, res, ctx) => {
    return res(ctx.json(gifsFixture))
  }),
]
