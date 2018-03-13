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

describe('route /forms', () => {
  describe('method GET /fomrs', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .get('/forms')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        })
        .catch(console.log));
    test('should return "TestForm" ', done =>
      supertest(server.listener)
        .get('/forms')
        .then((response) => {
          expect(response.body.data[0].formName).toBe('TestForm');
          done();
        })
        .catch(console.log));
  });
});

