"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var hostname = '127.0.0.1';
var _process$env = process.env,
    _process$env$NODE_POR = _process$env.NODE_PORT,
    port = _process$env$NODE_POR === void 0 ? 9400 : _process$env$NODE_POR,
    _process$env$NODE_ENV = _process$env.NODE_ENV,
    env = _process$env$NODE_ENV === void 0 ? 'dev' : _process$env$NODE_ENV;
var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

if (env !== 'test') {
  var accessLogStream = _fs["default"].createWriteStream(_path["default"].join(__dirname, '../log/access.log'), {
    flags: 'a'
  });

  app.use((0, _morgan["default"])('combined', {
    "stream": accessLogStream
  }));
}

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_routes["default"]);
server.listen(port, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
module.exports = server;
//# sourceMappingURL=server.js.map