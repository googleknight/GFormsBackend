const Models = require('../../models');


function createForm(formName, questions) {
  const PromiseArray = questions.map(question =>
    Models.formdetail.create({
      formName,
      question: question.question,
      required: question.required,
      type: question.type,
    }));
  return Promise.all(PromiseArray);
}
module.exports = {
  createForm,
};
