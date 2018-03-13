const { giveResponse } = require('../../src/handlers/giveResponse');
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
  ])
    .then(() => Models.response.bulkCreate([{
      formName: 'TestUser',
      question: 'First Question',
      response: 'Some answer',
    },
    {
      formName: 'TestUser',
      question: 'Second Question',
      response: 'Some other answer',
    },
    ]))
    .then(() => { done(); });
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

describe('function giveResponse', () => {
  test('should reads two entries from database', (done) => {
    giveResponse('TestUser').then(data =>
      expect(data.length).toBe(2));
    done();
  });
});

