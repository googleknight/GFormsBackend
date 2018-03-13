const { createForm } = require('../handlers/createForm');
const { saveForm } = require('../handlers/saveForm');
const Models = require('../../models');

module.exports = [
  {
    method: 'POST',
    path: '/forms/new',
    handler: (request, response) => {
      const { payload } = request;
      createForm(payload.formName, payload.questions).then((formDetails) => {
        response({
          data: formDetails,
          statusCode: 200,
        });
      })
        .catch(() => {
          response({
            data: {
              reason: 'Unable to create a new form.',
            },
            statusCode: 500,
          });
        });
    },
  },
  {
    method: 'GET',
    path: '/forms',
    handler: (request, response) => {
      Models.formdetail.findAll({
        attributes: ['formName'],
        distinct: true,
      }).then((forms) => {
        response({
          data: forms,
          statusCode: 200,
        });
      })
        .catch(() => {
          response({
            data: {
              reason: 'Unable to get forms.',
            },
            statusCode: 500,
          });
        });
    },
  },
  {
    method: 'POST',
    path: '/forms/submit',
    handler: (request, response) => {
      const { payload } = request;
      saveForm(payload.formName, payload.responses).then((formDetails) => {
        response({
          data: formDetails,
          statusCode: 200,
        });
      })
        .catch(() => {
          response({
            data: {
              reason: 'Unable to submit form.',
            },
            statusCode: 500,
          });
        });
    },
  },
];
