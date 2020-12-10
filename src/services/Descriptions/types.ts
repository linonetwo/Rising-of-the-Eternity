import { InspectTreeResult } from 'fs-jetpack/types';

import { IService } from '@/services/types';

export interface IDescriptionStore extends IService {}

/**
 * 基本类似于 inspectData https://www.npmjs.com/package/fs-jetpack#inspecttreepath-options ，但是多了 content 包含 JSON parse 过的文件内容
 */
export type InspectResultWithContent<ParsedContentType> = InspectTreeResult &
  (
    | {
        fileType: 'data';
        content: ParsedContentType;
      }
    | {
        fileType: 'buffer';
        rawContent: Buffer;
      }
    | {
        fileType: 'error';
        errorMessage: string;
        rawContent?: Buffer | string;
      }
  ) & {
    /**
     * 文件的完整路径，带有 json png 等后缀
     */
    filePath: string;
  };
