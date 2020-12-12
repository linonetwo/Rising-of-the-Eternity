const fs = require('fs-extra');
const path = require('path');

const typeFolder = './src/services/Descriptions/cdda/types';
const fileNames = fs.readdirSync(typeFolder);
const typeNames = fileNames.filter((name) => name !== 'index.ts' && name !== 'names.ts').map((name) => name.replace('.ts', ''));
const contents = typeNames.map((name) => fs.readFileSync(path.join(typeFolder, `${name}.ts`), 'utf-8'));
const CDDA_JSON_TYPES = contents.map((content, index) => {
  const typeNameMatcher = /type: '(.+)';/gm;
  const matchResult = typeNameMatcher.exec(content);
  return matchResult[1];
});
const CDDA_JSON_TYPES_WITH_ID = contents.filter((content, index) => {
  const typeNameMatcher = /type: '(.+)';/gm;
  const matchResult = typeNameMatcher.exec(content);
  return matchResult[1];
}).map((content, index) => {
  const typeNameMatcher = /type: '(.+)';/gm;
  const matchResult = typeNameMatcher.exec(content);
  return matchResult[1];
});

const importStatements =
  typeNames.map((type) => `import { I${type} } from './${type}';\n`).join('') +
  `import { CDDA_JSON_TYPES } from './names';\n\nexport { CDDA_JSON_TYPES };\n`;
const ICDDAJSONDeclaration =
  `export type ICDDAJSONWithComments = ICDDAJSON & { '//'?: string | string[] };\nexport type ICDDAJSON =\n  |` +
  typeNames.map((type) => ` I${type}`).join('\n  |') +
  ';\n';
const ICDDAJSONProcessorsDeclaration =
  `\nexport interface IProcessors<CONTEXT> extends Record<CDDA_JSON_TYPES, (item: never, round: number, context: CONTEXT) => void> {\n` +
  typeNames.map((type, index) => `  ${CDDA_JSON_TYPES[index]}: (item: I${type}, round: number, context: CONTEXT) => void;`).join('\n') +
  '\n}\n';
const ICDDAJSONTypeMapDeclaration =
  `\nexport interface ICDDATypeMap {\n` + typeNames.map((type, index) => `  ${CDDA_JSON_TYPES[index]}: I${type};`).join('\n') + '\n}\n';
fs.writeFileSync(
  './src/services/Descriptions/cdda/types/index.ts',
  importStatements + ICDDAJSONDeclaration + ICDDAJSONProcessorsDeclaration + ICDDAJSONTypeMapDeclaration,
);

const CDDANames = `export type CDDA_JSON_TYPES =\n  |` + CDDA_JSON_TYPES.map((name) => ` '${name}'`).join('\n  |') + ';\n';
fs.writeFileSync('./src/services/Descriptions/cdda/types/names.ts', CDDANames);
