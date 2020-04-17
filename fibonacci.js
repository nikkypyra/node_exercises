const http = require("http");
const fibonacci = require("./fibonacci_functions");

const requestListener = function (req, res) {
  res.writeHead(200);
  const result = fibonacci(16);
  res.end(JSON.stringify(result));
};

const server = http.createServer(requestListener);
server.listen(9000);
