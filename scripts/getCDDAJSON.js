const { assert } = require('console');
const fs = require('fs-extra');
const path = require('path');

const base = '/Users/lindongwu/Desktop/github/Cataclysm-DDA/data/json/items';
const out = '/Users/lindongwu/Desktop/github/Eternity-Foundation/scripts/out.json';
const nameFilter = 'terrain';
const type = 'ARMOR';
let files = fs.readdirSync(base);
// files = files.filter((name) => name.startsWith(nameFilter));

// deal with sub folders
const subFolders = files.filter((name) => !name.endsWith('.json'));
for (const subFolderName of subFolders) {
  const subFileNames = fs.readdirSync(path.join(base, subFolderName));
  files = [...files, ...subFileNames.map((subFileName) => path.join(subFolderName, subFileName))];
}
files = files.filter((name) => name.endsWith('.json'));

const contents = files.flatMap((name) => fs.readJsonSync(path.join(base, name)));
const useAction = {}
contents.forEach((dataObject) => {
  // if (dataObject.type !== type) {
  //   console.log(dataObject.type, dataObject);
  // }
  if (dataObject?.use_action && !Array.isArray(dataObject.use_action) ) {
    if (!useAction[dataObject.use_action.type]) {
      useAction[dataObject.use_action.type] = [dataObject.use_action]
    } else {
      useAction[dataObject.use_action.type].push(dataObject.use_action)
    }
  } else if (dataObject?.use_action) {
    console.log(dataObject.use_action);

  }
});


fs.writeJsonSync(
  out,
  useAction,
);
