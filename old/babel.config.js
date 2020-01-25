module.exports = {
    plugins: [
        ["@babel/proposal-class-properties"],
        ["@babel/plugin-proposal-decorators", {"decoratorsBeforeExport": true}]
    ],
    presets: ["@babel/env", "@babel/typescript"]
};
