const serverlessExpress = require('@vendia/serverless-express')
const server = require('./server/main');
const app = server.app();
exports.handler = serverlessExpress({ app })