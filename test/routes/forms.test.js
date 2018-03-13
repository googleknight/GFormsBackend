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
  describe('method POST /forms/new', () => {
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
  describe('method GET /forms/formNames', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .get('/forms/formNames')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        })
        .catch(console.log));
    test('should return "TestForm" ', done =>
      supertest(server.listener)
        .get('/forms/formNames')
        .then((response) => {
          expect(response.body.data[0].DISTINCT).toBe('TestForm');
          done();
        })
        .catch(console.log));
  });
});

describe('route /forms/submit', () => {
  describe('method POST /forms/submit', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .post('/forms/submit')
        .send({
          formName: 'TestForm',
          responses:
            [{
              question: 'First Question',
              response: 'Some answer',
            },
            {
              question: 'Second Question',
              response: 'Some other answer',
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

  describe('method GET /forms', () => {
    test('should return a 200 OK statusCode', done =>
      supertest(server.listener)
        .get('/forms?formName=TestForm')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        })
        .catch(console.log));
  });
});
