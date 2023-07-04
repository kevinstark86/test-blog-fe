import {Text} from 'slate';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children: RichTextNode[];
};

export default function wordCounter(content: RichTextNode[]): string {
  let combinedString = '';

  content?.forEach(node => {
    if (Text.isText(node)) {
      combinedString += ` ${node.text}`;
    } else {
      combinedString += ` ${wordCounter(node.children)}`;
    }
  });

  return combinedString;
}
