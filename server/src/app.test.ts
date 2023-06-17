import request from 'supertest'
import { createApp } from './app'
import lowdb from 'lowdb'
import Memory from 'lowdb/adapters/Memory'
import { DatabaseSchema } from './DatabaseSchema'
import { Express } from 'express'
import dbData from './fixtures/db.json'

describe('/api/gifs', () => {
  let app: Express
  beforeEach(() => {
    const adapter = new Memory<DatabaseSchema>('./data/db.json')
    const db = lowdb(adapter)
    db.defaults(dbData).write()
    app = createApp(db)
  })

  it('endpoint existe', (done) => {
    request(app).get('/api/gifs').expect(200, done)
  })
  it('devulve una lista', (done) => {
    request(app)
      .get('/api/gifs')
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array)
        done()
      })
  })
  it('la lista tiene 50 items', (done) => {
    request(app)
      .get('/api/gifs')

      .expect(200)
      .then((res) => {
        console.log(res.body)

        expect(res.body).toHaveLength(10)
        done()
      })
  })
})
