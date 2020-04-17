const http = require("http");
const filesystem = require("fs");

http
  .createServer((request, response) => {
    const { url } = request;
    if (url == "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const cv = filesystem.readFileSync("cv.html");
      response.end(cv);
    } else if (url.match("cv.css")) {
      response.writeHead(200, { "Content-Type": "text/css" });
      const css = filesystem.readFileSync("cv.css");
      response.end(css);
    } else if (url == "/jobs") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const jobs = filesystem.readFileSync("jobs.html");
      response.end(jobs);
    } else if (url == "/hobbies") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const hobbies = filesystem.readFileSync("hobbies.html");
      response.end(hobbies);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Page does not exist.");
    }
  })
  .listen(8080);
