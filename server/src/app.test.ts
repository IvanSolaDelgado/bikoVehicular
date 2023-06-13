import request from 'supertest'
import { app } from './app'

describe('/api/gifs', () => {
  it('endpoint existe', (done) => {
    request(app).get('/api/gifs').expect(200, done)
  })
})
