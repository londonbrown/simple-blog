const childProcess = require("child_process");

module.exports = async (scriptOptions, callback) => {
  let scriptName = scriptOptions.name;
  let scriptParent = scriptOptions.parent;

  let process = childProcess.spawn(`npm`, ["run", scriptName], {
    cwd: scriptParent,
    shell: true
  });
  process.stdout.on("data", data => {
    callback(null, data.toString().trim());
  });
  process.stderr.on("data", data => {
    callback(null, data.toString().trim());
  });
  process.on("error", err => {
    callback(err);
  });
  process.on("exit", code => {
    let exit = code === 0 ? "exit code 0" : new Error(`exit code ${code}`);
    callback(null, exit);
  });
  return process;
};
