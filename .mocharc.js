'use strict';

module.exports = {
    diff: true,
    extension: ['ts'],
    opts: false,
    package: './package.json',
    reporter: 'mochawesome',
    ui: 'bdd',
    'watch-files': ['test/**/*.ts'],
    'watch-ignore': ['node_modules', '.webpack', '.serverless']
};
