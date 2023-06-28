import {Typography, Link, List, ListItem} from '@mui/material';
import {Variant} from '@mui/material/styles/createTypography';
import {Text} from 'slate';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children?: RichTextNode[];
};
type NodeTypes = {
  content: RichTextNode[];
};

function replaceEscapes(input: string) {
  return input.replaceAll('\n', '<br>');
}

export default function TextParser({content}: NodeTypes) {
  return (
    <>
      {content.map((node, index) => {
        if (Text.isText(node)) {
          let text = (
            <span key={index} dangerouslySetInnerHTML={{__html: replaceEscapes(node.text)}} />
          );
        }
        if (!node.type) {
          return node.text;
        }
        if (Object.keys(node).length === 1) {
          return (
            <Typography key={index} variant="body1">
              {node.text}
            </Typography>
          );
        }

        switch (node.type) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              <Typography key={index} variant={node.type as Variant}>
                <TextParser content={node.children} />
              </Typography>
            );
          case 'ol':
            return (
              <List key={index} sx={{listStyleType: 'disc', pl: 4}}>
                <TextParser content={node.children} />
              </List>
            );
          case 'li':
            return (
              <ListItem key={index} sx={{display: 'list-item'}}>
                <Typography key={index} variant="body1" component="span">
                  {node.text}
                  <TextParser content={node.children} />
                </Typography>
              </ListItem>
            );
          case 'link':
            return (
              <Link href={node.url} key={index}>
                {node.text}
                <TextParser content={node.children} />
              </Link>
            );
          default:
            return (
              <Typography key={index} variant="body1">
                {node.text}
              </Typography>
            );
        }
      })}
    </>
  );
}
