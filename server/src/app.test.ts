import request from 'supertest'
import { app } from './app'

describe('/api/gifs', () => {
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
