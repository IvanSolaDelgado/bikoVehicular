import express from 'express'
import { LowdbSync } from 'lowdb'
import './app'
import { DatabaseSchema } from './DatabaseSchema'

export const createRoutes = (db: LowdbSync<DatabaseSchema>) => {
  const apiRoutes = express.Router()

  apiRoutes.get('/gifs', (req, res) => {
    const gifs = db.get('gifs').take(50).value()
    res.status(200).json(gifs)
  })
  return apiRoutes
}
