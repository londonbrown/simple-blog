const chalk = require("chalk");
const LOG_TAG = chalk.black.bgYellow("[simple-blog]");

module.exports = (err, id, msg) => {
  let formattedId = chalk.black(`[${id}]`);
  formattedId =
    id === "app" ? chalk.bgGreen(formattedId) : chalk.bgBlue(formattedId);
  if (err) {
    console.error(LOG_TAG, formattedId, err);
    return;
  }
  console.log(LOG_TAG, formattedId, msg);
};
