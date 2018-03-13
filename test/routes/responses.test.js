const supertest = require('supertest');
const server = require('../../src/server/server');


describe('route /responses', () => {
  describe('method GET /responses', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .get('/responses?formName=TestForm')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        })
        .catch(console.log));
  });
});
