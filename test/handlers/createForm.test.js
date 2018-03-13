const { createForm } = require('../../src/handlers/createForm');
const Models = require('../../models');

afterEach((done) => {
  Models.formdetail.destroy({
    where: { },
    truncate: false,
    restartIdentity: true,
  }).then(() => { done(); });
});

describe('function createForm', () => {
  const inputQuestions = [{
    question: 'First Question',
    required: true,
    type: 'short',
  },
  {
    question: 'Second Question',
    required: false,
    type: 'date',
  },
  ];
  test('should return a promise', (done) => {
    expect(createForm('TestForm', inputQuestions)).toBeInstanceOf(Promise);
    done();
  });
  test('should add two questions in database', (done) => {
    createForm('TestForm', inputQuestions).then(() =>
      Models.formdetail.count(count =>
        expect(count).toBe(2)));
    done();
  });
});

