let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
// mariadb 연결 완료
mariadb.connect();

server.start(router.route, requestHandler.handle);
