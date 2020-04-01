"use strict";

const path = require("path");
const rootDir = path.join(__dirname, "../../");
const apiDir = path.join(rootDir, "api");
const appDir = path.join(rootDir, "app");

const LOGGER = require("./util/logger");
const scriptRunner = require("./util/script_runner");
const appScriptObj = { id: "app", name: "start", parent: appDir };
const apiScriptObj = {
  id: "api",
  name: "offline",
  parent: apiDir,
  searchString: "[HTTP] server ready"
};
scriptRunner(apiScriptObj, (err, message) => {
  if (err) {
    LOGGER(err);
    throw err;
  }
  if (message.trim === "") return;
  if (message.indexOf(apiScriptObj.searchString) >= 0) {
    scriptRunner(appScriptObj, (err, message) => {
      LOGGER(err, appScriptObj.id, message);
    });
    return;
  }
  LOGGER(err, apiScriptObj.id, message);
});
