const { saveForm } = require('../../src/handlers/saveForm');
const Models = require('../../models');

beforeEach((done) => {
  Models.formdetail.bulkCreate([{
    formName: 'TestUser',
    question: 'First Question',
    required: true,
    type: 'short',
  },
  {
    formName: 'TestUser',
    question: 'Second Question',
    required: false,
    type: 'para',
  },
  ]).then(() => { done(); });
});
afterEach((done) => {
  Models.response.destroy({
    where: { },
    truncate: false,
    restartIdentity: true,
  }).then(() =>
    Models.formdetail.destroy({
      where: { },
      truncate: false,
      restartIdentity: true,
    })).then(() => { done(); });
});

describe('function saveForm', () => {
  const inputResponses = [{
    question: 'First Question',
    response: 'Some answer',
  },
  {
    question: 'Second Question',
    response: 'Some other answer',
  },
  ];
  test('should return an Array', (done) => {
    expect(saveForm('TestUser', inputResponses)).toBeInstanceOf(Promise);
    done();
  });
  test('should makes two entries in database', (done) => {
    saveForm('TestUser', inputResponses).then(data =>
      expect(data.length).toBe(2));
    done();
  });
});

