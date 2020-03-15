"use strict";
const childProcess = require("child_process");
const path = require("path");
const rootDir = path.join(__dirname, "../../");

let serverlessOfflineStart = childProcess.spawn("npm run offline", {
  shell: true
});

serverlessOfflineStart.on("error", err => console.error(err.toString()));
serverlessOfflineStart.stdout.on("data", data => console.log(data.toString()));
serverlessOfflineStart.stderr.on("data", data =>
  console.error(data.toString())
);
