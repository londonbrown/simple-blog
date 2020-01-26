'use strict';

module.exports = {
    diff: true,
    extension: ['ts'],
    opts: false,
    package: './package.json',
    reporter: 'spec',
    ui: 'tdd',
    'watch-files': ['./**/*.ts'],
    'watch-ignore': ['node_modules', '.webpack', '.serverless']
};
