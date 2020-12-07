const { assert } = require('console');
const fs = require('fs-extra');
const path = require('path');

const base = '/Users/linonetwo/Desktop/repo/Cataclysm-DDA/data/json';
const mods = '/Users/linonetwo/Desktop/repo/Cataclysm-DDA/data/mods';
const out = '/Users/linonetwo/Desktop/repo/Eternity-Foundation/scripts/out.json';

const type = 'GENERIC';
let files = [
  ...fs.readdirSync(base).map((name) => path.join(base, name)),
  ...fs.readdirSync(mods).map((name) => path.join(mods, name)),
].filter((name) => !name.endsWith('replacements.json'));

const isFolder = (name) => !name.endsWith('.json') && !name.endsWith('.png') && !name.endsWith('.txt') && !name.endsWith('.md')
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
const types = new Set()
contents.forEach((dataObject) => {
  types.add(dataObject.type)
})
console.log(types)

// const useAction = {}
contents = contents.filter((item) => item.type === type);
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

fs.writeJsonSync(out, contents);
