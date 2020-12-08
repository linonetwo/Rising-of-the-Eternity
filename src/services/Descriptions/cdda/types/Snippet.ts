export interface ISnippet {
  type: 'snippet';
  category: string;
  text: string[] | Text2[] | Text3[] | Array<Text42 | string> | Text5[] | string;
  '//'?: string;
}

interface Text5 {
  id: string;
  text: Text | string;
}

interface Text42 {
  text: Text4;
}

interface Text4 {
  ctxt: string;
  str: string;
}

interface Text3 {
  id: string;
  text: Text | Text22 | string;
}

interface Text22 {
  str: string;
}

interface Text {
  str: string;
  '//NOLINT(cata-text-style)': string;
}

interface Text2 {
  id: string;
  text: string;
}
