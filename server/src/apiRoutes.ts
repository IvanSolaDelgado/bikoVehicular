import express from 'express'
import { LowdbSync } from 'lowdb'
import './app'
import { DatabaseSchema } from './DatabaseSchema'
import { mapData } from './domain/GifMap'

export const createRoutes = (db: LowdbSync<DatabaseSchema>) => {
  const apiRoutes = express.Router()

  apiRoutes.get('/gifs', (req, res) => {
    const gifs = db.get('gifs').take(50).value()
    res.set('Access-Control-Allow-Origin', '*')
    res.status(200).json(gifs.map(mapData))
  })
  return apiRoutes
}
