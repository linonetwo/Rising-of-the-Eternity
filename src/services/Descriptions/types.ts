import { InspectTreeResult } from 'fs-jetpack/types';
import { IGunChainReference } from 'gun/types/chain';

/**
 * Gun db without .then , if we don't exclude "then" from IGunChainReference, it will cause the Promise<IGunChainReference> return value error (The return type of an async function must either be a valid promise or must not contain a callable 'then' member.ts(1058)
)
 */
export type IGun = Omit<IGunChainReference, 'then'>;

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
