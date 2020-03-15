"use strict";
const chalk = require("chalk");
const LOG_TAG = chalk.bgYellow("[simple-blog]");

const path = require("path");
const childProcess = require("child_process");

const rootDir = path.join(__dirname, "../../");
const apiDir = path.join(rootDir, "api");
const appDir = path.join(rootDir, "app");

const apiOfflineStartScriptPath = path.join(apiDir, "scripts/offline.js");
const appStartScriptPath = path.join(appDir, "scripts/start.js");

const LOGGER = (err, id, msg) => {
  let formattedId = `[${id}]`;
  formattedId =
    id === "app" ? chalk.bgGreen(formattedId) : chalk.bgBlue(formattedId);
  if (err) {
    console.error(LOG_TAG, formattedId, err);
    return;
  }
  console.log(LOG_TAG, formattedId, msg);
};

const runScript = (scriptObj, callback) => {
  let invoked = false;

  let scriptPath = scriptObj.script;
  let scriptParent = scriptObj.parent;

  let process = childProcess.spawn(`node`, [scriptPath], { cwd: scriptParent });
  process.stdout.on("data", data => {
    callback(null, data.toString().trim());
  });
  process.stderr.on("data", data => {
    callback(null, data.toString().trim());
  });

  process.on("error", err => {
    if (invoked) return;
    invoked = true;
    callback(err);
  });

  process.on("exit", code => {
    if (invoked) return;
    invoked = true;
    let exit = code === 0 ? "exit code 0" : new Error(`exit code ${code}`);
    callback(null, exit);
  });
};

const scriptsToRun = [
  { id: "api", script: apiOfflineStartScriptPath, parent: apiDir },
  { id: "app", script: appStartScriptPath, parent: appDir }
];
scriptsToRun.map(scriptObj => {
  runScript(scriptObj, (err, message) => {
    LOGGER(err, scriptObj.id, message);
  });
});
