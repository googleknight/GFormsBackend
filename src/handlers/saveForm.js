const Models = require('../../models');


function saveForm(formName, responses) {
  const PromiseArray = responses.map(response =>
    Models.response.create({
      formName,
      question: response.question,
      response: response.response,
    }));
  return Promise.all(PromiseArray);
}
module.exports = {
  saveForm,
};
