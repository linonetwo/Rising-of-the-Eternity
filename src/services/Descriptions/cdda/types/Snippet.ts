export interface ISnippet {
  type: 'snippet';
  category: string;
  text: string[] | Text2[] | Array<Text3 | string> | Text42[] | string;
  '//'?: string;
}

interface Text42 {
  id: string;
  text: Text4 | string;
}

interface Text4 {
  str: string;
  '//NOLINT(cata-text-style)': string;
}

interface Text3 {
  text: Text;
}

interface Text {
  ctxt: string;
  str: string;
}

interface Text2 {
  id: string;
  text: string;
}
