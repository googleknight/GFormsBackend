const { createForm } = require('../handlers/createForm');

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
];
