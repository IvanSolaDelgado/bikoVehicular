import { rest } from 'msw'

export const handlers = [
  rest.get('/api/gifs', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'perro loco',
          imgUrl: 'https://media2.giphy.com/media/ouNNlZiPMbv61kzS1M/giphy.gif',
        },
      ]),
    )
  }),
]
