"use strict";
// ローカルモジュールのmessages.jsを要求する
const messageModule = require('./messages');
// その配列をmessageModule.messagesとして参照する
messageModule.messages.forEach((message) => {
  console.log(message);
});
