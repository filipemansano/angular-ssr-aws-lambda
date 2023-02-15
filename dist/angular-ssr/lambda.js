const serverlessExpress = require('@vendia/serverless-express')
const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware');
const server = require('./server/main');

const app = server.app();
app.use(serverlessExpressMiddleware.eventContext());

exports.handler = serverlessExpress({ app })