var ddPush = require("dd-push-js");
var config = require("./config.json");

var p1 = ddPush(config);
p1.write((new Date()).toISOString() + "," + "started")
  .then(function(body){
    console.log("The server responded with:", body);
  });