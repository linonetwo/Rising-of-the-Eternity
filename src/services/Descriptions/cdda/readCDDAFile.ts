/* eslint-disable camelcase */
import fs from 'fs-jetpack';
import { InspectTreeResult } from 'fs-jetpack/types';
import path from 'path';
import { flatten } from 'lodash';

import { ICDDAJSON } from './types';
import { InspectResultWithContent } from '../types';

/**
 * 递归把文件内容塞进文件树里
 * @param inspectData https://www.npmjs.com/package/fs-jetpack#inspecttreepath-options
 * @param parentPath 用于拼凑 filePath 用的父级路径
 */
async function getFileJSON(inspectData: InspectTreeResult, parentPath = ''): Promise<Array<InspectResultWithContent<ICDDAJSON[]>>> {
  const filePath = path.join(parentPath, inspectData.name);
  if (inspectData.type === 'file') {
    if (inspectData.name.endsWith('json')) {
      // JSON 文件
      const rawJsonString = await fs.readAsync(filePath);
      let content;
      if (rawJsonString !== undefined) {
        try {
          content = JSON.parse(rawJsonString) as ICDDAJSON[];
        } catch (error) {
          return [
            {
              ...inspectData,
              filePath,
              fileType: 'error',
              errorMessage: `JSON parsing error ${String(error)}`,
              rawContent: rawJsonString,
            },
          ];
        }
        return [{ ...inspectData, content, fileType: 'data', filePath }];
      }
      return [
        {
          ...inspectData,
          filePath,
          fileType: 'error',
          errorMessage: 'Empty JSON content',
          rawContent: rawJsonString,
        },
      ];
    } else {
      // png 贴图等
      const rawBuffer = await fs.readAsync(filePath, 'buffer');
      if (rawBuffer !== undefined) {
        return [{ ...inspectData, rawContent: rawBuffer, fileType: 'buffer', filePath }];
      }
      return [
        {
          ...inspectData,
          filePath,
          fileType: 'error',
          errorMessage: 'Empty raw file content',
          rawContent: rawBuffer,
        },
      ];
    }
  }
  if (inspectData.type === 'dir') {
    const dataFromChildren = await Promise.all(inspectData.children.map(async (item) => await getFileJSON(item, filePath)));
    return flatten(dataFromChildren);
  }
  return [
    {
      ...inspectData,
      filePath,
      fileType: 'error',
      errorMessage: `Unknown file type ${inspectData.type}`,
    },
  ];
}

/**
 * 读取原始文件内容，打平成一维数组，并带上路径信息
 */
export async function readCDDASourceFiles(sourceModDirectory: string): Promise<Array<InspectResultWithContent<ICDDAJSON[]>>> {
  const folders = await fs.inspectTreeAsync(sourceModDirectory);
  if (folders !== undefined) {
    const foldersWithContent = await getFileJSON(folders);
    return foldersWithContent;
  }
  return [];
}
