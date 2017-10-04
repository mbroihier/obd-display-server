// OBD display server - displays logs collected by the OBD logger
// Setup all required packages
'use strict';
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var jsdom = require("jsdom");
var readLine = require("readline");
var WebSocketServer = require("ws").Server;
var spawn = require("child_process").spawn;
var execSync = require("child_process").execSync;
// Read main html page - this will be parsed later
let mainPageContents = fs.readFileSync("./index.html");
// Read log entry page - this will be reissued later
// create an express server to make a static file server
var app = express();
var statTime = [];
var relay = [];
// initialize global information

// check for changes to the test database every second
setInterval(function(){
    let changed = false;
    for (let entry of statTime) {
      changed |= fs.statSync(entry.Path).ctime.valueOf() != entry.Time.valueOf();
      entry.Time = fs.statSync(entry.Path).ctime;
    }
    if (changed) {
      console.log("need to do something");
    }
  },1000);
// if the express server is contacted, look at the request and build a response or
// forward the request to the standard server behavior.
app.get("/", function(request, response, next) {
    // this is the main page so build replacement DOM
    // that has the sections available to edit
    let files = fs.readdirSync("./");
    let dom = new jsdom.JSDOM(mainPageContents);
    let document = dom.window.document;
    let insertionPoint = document.querySelector("#list");
    for (let file of files) {
      if (file.indexOf("graph") >= 0) {
        let element = document.createElement("a");
        element.setAttribute("href",file);
        element.innerHTML = file;
        let listElement = document.createElement("li");
        listElement.appendChild(element);
        insertionPoint.appendChild(listElement);
      }
    }
    response.send(dom.serialize());
  });
app.get("*", function(request, response, next) {
    console.log("fell into default get");
    console.log(request.url);
    console.log(request.method);
    next();
  });
app.post("*", function(request, response, next) {
    console.log("fell into default post");
    console.log(request.url);
    console.log(request.method);
    next();
  });
app.use(express.static("./"));
var ws = new WebSocketServer({server: app.listen(process.env.PORT || 3000)});

ws.on("connection", function(connection) {
    relay.push(connection); // store for communication
    console.log("web socket connection made at server from HTML client page");
    connection.send("connected");
    connection.on("message", function (message) {
        if (message === "exit") {
          relay.splice(relay.indexOf(connection), 1);
          connection.close();
        }
      });
    connection.on("close", function(message) {
        relay.splice(relay.indexOf(connection), 1);
        connection.close();
        console.log("closing a connection");
      });
  });

console.log("OBD display server is listening");
