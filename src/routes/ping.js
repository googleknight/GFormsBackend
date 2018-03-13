
module.exports = [
  {
    method: 'GET',
    path: '/ping',
    handler: (request, response) => {
      response({
        message: 'pong',
        statusCode: 200,
      });
    },
  },
];
