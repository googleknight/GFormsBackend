const Models = require('../../models');


function giveResponse(formName) {
  return Models.formdetail.findAll({
    where: {
      formName,
    },
    attributes: ['question'],
  }).then(questions =>
    questions.map(question => Models.response.findAll({
      where: {
        question: question.question,
      },
      attributes: ['response'],
      order: [['createdAt', 'DESC']],
      limit: 7,
    })
      .then(responses => ({
        question: question.question,
        responses: responses.map(response => response.response),
      }))))
    .then(allPromises => Promise.all(allPromises));
}

module.exports = {
  giveResponse,
};

