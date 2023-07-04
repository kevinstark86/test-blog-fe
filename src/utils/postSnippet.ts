import {Text} from 'slate';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children: RichTextNode[];
};

export function postSnippet(content: RichTextNode[], wordLimit: number): string {
  let snippet: string[] = [];

  function helper(nodes: RichTextNode[]) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if (snippet.length >= wordLimit) break;

      if (Text.isText(node)) {
        const words = node.text!.split(' ');
        // eslint-disable-next-line no-restricted-syntax
        for (const word of words) {
          if (snippet.length < wordLimit) {
            snippet.push(word);
          } else {
            break;
          }
        }
      } else if (
        node.type !== 'h1' &&
        node.type !== 'h2' &&
        node.type !== 'h3' &&
        node.type !== 'h4' &&
        node.type !== 'h5' &&
        node.type !== 'h6'
      ) {
        helper(node.children);
      }
    }
  }

  helper(content);
  return `${snippet.join(' ')}...`;
}

// const snippet = createSnippet(contentData, 20);  // Replace contentData with your actual data
