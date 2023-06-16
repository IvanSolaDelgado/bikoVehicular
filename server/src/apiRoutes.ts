import express from 'express'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import './app'

interface DatabaseSchema {
  gifs: Gif[]
}
interface Gif {}

const adapter = new FileSync<DatabaseSchema>('./data/db.json')
const db = lowdb(adapter)

export const apiRoutes = express.Router()

apiRoutes.get('/gifs', (req, res) => {
  const gifs = db.get('gifs').take(50).value()
  res.status(200).json(gifs)
})
