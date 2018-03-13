const ping = require('./ping');
const forms = require('./forms');
const responses = require('./responses');

module.exports = [].concat(ping, forms, responses);
