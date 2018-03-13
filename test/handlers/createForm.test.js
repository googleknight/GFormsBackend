const { createForm } = require('../../src/handlers/createForm');
const Models = require('../../models');

afterAll((done) => {
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
    createForm('TestForm', inputQuestions).then(data =>
      expect(data).toBeInstanceOf(Promise));
    done();
  });
});

