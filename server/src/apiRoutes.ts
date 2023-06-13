import express from 'express'

export const apiRoutes = express.Router()

apiRoutes.get('/gifs', (req, res) => {
  res.status(200).json([])
})
