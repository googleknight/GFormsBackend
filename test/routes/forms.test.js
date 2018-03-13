const supertest = require('supertest');
const server = require('../../src/server/server');
const Models = require('../../models');

afterAll((done) => {
  Models.formdetail.destroy({
    where: { },
    truncate: false,
    restartIdentity: true,
  }).then(() => { done(); });
});

describe('route /forms/new', () => {
  describe('method POST /fomrs/new', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .post('/forms/new')
        .send({
          formName: 'TestForm',
          questions:
            [{
              question: 'First Question',
              required: true,
              type: 'short',
            },
            {
              question: 'Second Question',
              required: false,
              type: 'date',
            },
            ]
          ,
        })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        })
        .catch(console.log));
  });
});
