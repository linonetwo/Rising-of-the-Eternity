const fs = require('fs-extra');
const path = require('path');
const Loki = require('lokijs');

const base = './resources/mods/cdda/core';
const mods = './resources/mods/cdda/mods';

// const type = 'GENERIC';
let files = [
  // ...fs.readdirSync(base).map((name) => path.join(base, name)),
  // ...fs.readdirSync(mods).map((name) => path.join(mods, name)),
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
// DEBUG: console
console.log(`contents.length`, contents.length);

const db = new Loki('example.db');
const users = db.addCollection('users');
users.insert([
  { name: 'Thor', age: 35 },
  { name: 'Loki', age: 30 },
]);
const results = users.find({ age: { $gte: 35 } });
// DEBUG: console
console.log(`results`, results);
