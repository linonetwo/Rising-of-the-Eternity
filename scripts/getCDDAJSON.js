const { assert } = require('console');
const fs = require('fs-extra');
const path = require('path');
const JsonToTS = require('json-to-ts');
const { camelCase, capitalize } = require('lodash');

const base = './resources/mods/cdda/core';
const mods = './resources/mods/cdda/mods';
const out = './scripts/out.json';
const tsFilePathBase = './src/services/Descriptions/cdda/types';

// const type = 'GENERIC';
let files = [
  ...fs.readdirSync(base).map((name) => path.join(base, name)),
  ...fs.readdirSync(mods).map((name) => path.join(mods, name)),
].filter((name) => !name.endsWith('replacements.json'));

const isFolder = (name) => !name.endsWith('.json') && !name.endsWith('.png') && !name.endsWith('.txt') && !name.endsWith('.md');
// deal with sub folders
const subFolders = files.filter(isFolder);
while (subFolders.length > 0) {
  const subFolderName = subFolders.pop();
  const subFileNames = fs.readdirSync(subFolderName).map((name) => path.join(subFolderName, name));
  const newSubFolders = subFileNames.filter(isFolder);
  const newFiles = subFileNames.filter((name) => name.endsWith('.json'));
  newSubFolders.forEach((newSubFolderName) => subFolders.push(newSubFolderName));
  files = [...files, ...newFiles];
}
files = files.filter((name) => name.endsWith('.json'));

let contents = files.flatMap((name) => fs.readJsonSync(name));
// Collect types
const types = new Set();
contents.forEach((dataObject) => {
  types.add(dataObject.type);
});
// console.log(types)

// const useAction = {}
// contents = contents.filter((item) => item.type === type);
contents.forEach((dataObject) => {
  // if (dataObject.type !== type) {
  //   console.log(dataObject.type, dataObject);
  // }
  // if (dataObject?.snippet_category && !Array.isArray(dataObject.snippet_category)) {
  //   console.log(dataObject.snippet_category);
  // }
  // if (dataObject?.use_action && !Array.isArray(dataObject.use_action) ) {
  //   if (!useAction[dataObject.use_action.type]) {
  //     useAction[dataObject.use_action.type] = [dataObject.use_action]
  //   } else {
  //     useAction[dataObject.use_action.type].push(dataObject.use_action)
  //   }
  // } else if (dataObject?.use_action) {
  //   console.log(dataObject.use_action);
  // }
  // if (dataObject?.material && typeof dataObject.material !== 'string') {
  //   console.log(dataObject.material)
  // }
});

// fs.writeJsonSync(out, contents);
console.log('starting JsonToTS');
for (const type of types) {
  let [nameStart, ...nameRest] = camelCase(type).split('');
  const camelCasedTypeName = [capitalize(nameStart), ...nameRest].join('');
  console.log(`For ${type} (${camelCasedTypeName}):`);
  const contentOfThisType = contents.filter((item) => item.type === type);

  let tsString = `import { CDDA_JSON_TYPES } from './names'\n\n`;
  JsonToTS(contentOfThisType).forEach((typeInterface) => {
    tsString += typeInterface;
    tsString += '\n\n';
    const isRootObject = tsString.includes('interface RootObject');
    if (isRootObject) {
      tsString = tsString.replace('interface RootObject', `export interface I${camelCasedTypeName}`);
      tsString = tsString.replace('  type: string;', `  type: CDDA_JSON_TYPES.${type};`);
    }
  });

  if (!fs.existsSync(tsFilePathBase)) {
    fs.mkdirSync(tsFilePathBase);
  }
  fs.writeFileSync(path.join(tsFilePathBase, `${camelCasedTypeName}.ts`), tsString);
}
