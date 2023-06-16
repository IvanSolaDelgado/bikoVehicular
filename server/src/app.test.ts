import request from 'supertest'
import { createApp } from './app'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { DatabaseSchema } from './DatabaseSchema'

describe('/api/gifs', () => {
  const adapter = new FileSync<DatabaseSchema>('./data/db.json')
  const db = lowdb(adapter)
  const app = createApp(db)

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

        expect(res.body).toHaveLength(50)
        done()
      })
  })
})
