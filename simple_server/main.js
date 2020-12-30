"use strict";
const port = 3000,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  app = http.createServer((request, response) => {
    console.log('リクエストを受信しました！');
    response.writeHead(httpStatus.OK, {
      "Content-Type":"text/html"
    });

    let responseMessage = "<h1>Hello, Universe</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`レスポンスを送信しました：${responseMessage}`);
  });

app.listen(port);
console.log(`サーバーが起動して、このポートを監視中：${port}`);
