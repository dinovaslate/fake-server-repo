const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/users/usr/:usr': '/users?usr=:usr',
    '/comments/usr/:usr': '/comments?usr=:usr',
    '/comments/streamId/:streamId': '/comments?streamId=:streamId',
    '/streams/usr/:usr': '/streams?usr=:usr',
  })
);
server.use(router);

server.listen(port);
