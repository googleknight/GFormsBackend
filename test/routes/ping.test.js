const supertest = require('supertest');
const server = require('../../src/server/server');

describe('route /ping', () => {
  test('should return pong', done =>
    supertest(server.listener)
      .get('/ping')
      .then((response) => {
        expect(response.body.message).toBe('pong');
        done();
      })
      .catch(console.log));
});
