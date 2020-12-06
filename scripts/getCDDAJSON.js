const { assert } = require('console');
const fs = require('fs-extra');
const path = require('path');

const base = '/Users/linonetwo/Desktop/repo/Cataclysm-DDA/data/json/items';
const out = '/Users/linonetwo/Desktop/repo/Eternity-Foundation/scripts/out.json';
const nameFilter = 'terrain';
const type = 'AMMO';
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
contents.forEach((dataObject) => {
  // if (dataObject.type !== type) {
  //   console.log(dataObject.type, dataObject);
  // }
  // if (dataObject?.groups && !Array.isArray(dataObject.groups) ) {
  //   console.log(dataObject.groups);
  // }
});

fs.writeJsonSync(
  out,
  contents.filter((dataObject) => dataObject.type === type),
);
