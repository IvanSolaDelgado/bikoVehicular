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

  apiRoutes.get('/gif/:gifId', (req, res) => {
    const gifId = req.params.gifId
    const gif = db.get('gifs').find({ id: gifId }).value()
    res.set('Access-Control-Allow-Origin', '*')
    res.status(200).json(mapData(gif))
  })
  return apiRoutes
}
