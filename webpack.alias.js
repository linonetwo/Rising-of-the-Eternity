const path = require('path');
const fs = require('fs-extra');

/**
 * @param {string[]} pathFragment
 * @returns {string}
 */
const rootResolve = (...pathFragment) => path.resolve(__dirname, ...pathFragment);

const webpackAlias = {
  '@': rootResolve('src'),
  '@typings': rootResolve('src/typings'),
  '@constants': rootResolve('src/constants'),
  '@redux': rootResolve('src/redux'),
  '@ecs': rootResolve('src/ecs'),
};

module.exports = {
  webpackAlias,
};
