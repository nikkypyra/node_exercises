const http = require("http");

http
  .createServer((request, response) => {
    const { url, method } = request;
    if (url == "/andreas") {
      response.writeHead(200);
      response.end("Hello Andreas");
    } else if (url == "/nikky") {
      response.writeHead(200);
      response.end("Hello Nikky");
    } else {
      response.end("Hello Stranger");
    }
  })
  .listen(8000);
