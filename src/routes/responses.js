const { giveResponse } = require('../handlers/giveResponse');


module.exports = [
  {
    method: 'GET',
    path: '/responses',
    handler: (request, response) => {
      giveResponse(request.query.formName)
        .then((responses) => {
          response({
            data: responses,
            statusCode: 200,
          });
        })
        .catch(() => {
          response({
            data: {
              reason: 'Unable to get responses.',
            },
            statusCode: 500,
          });
        });
    },
  }];

