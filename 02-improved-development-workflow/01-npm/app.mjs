import http from 'http';

import * as routes from './routes.mjs';

const server = http.createServer(routes.requestHandler);
console.log(routes.test);

server.listen(3000);