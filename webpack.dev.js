/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, { mode:'development' });
