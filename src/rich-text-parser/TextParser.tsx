import {Typography, Link, List, ListItem, Box} from '@mui/material';
import {Variant} from '@mui/material/styles/createTypography';
import escapeHTML from 'escape-html';
import {Text} from 'slate';
import {Fragment} from 'react';
import {RichTextNode} from '@/types/types';

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
          if (node.bold) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.code) {
            text = <code key={index}>{text}</code>;
          }
          if (node.italic) {
            text = <em key={index}>{text}</em>;
          }
          return <Fragment key={index}>{text}</Fragment>;
        }

        switch (node.type) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              <Typography
                key={index}
                variant={node.type as Variant}
                sx={{marginTop: 3, marginBottom: 3}}
              >
                <TextParser content={node.children} />
              </Typography>
            );
          case 'code':
            return (
              <Box component="pre" key={index}>
                <code>
                  <TextParser content={node.children} />
                </code>
              </Box>
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
                  <TextParser content={node.children} />
                </Typography>
              </ListItem>
            );
          case 'link':
            // @ts-ignore
            return (
              <Link href={escapeHTML(node.url)} key={index}>
                <TextParser content={node.children} />
              </Link>
            );
          default:
            return (
              <Typography key={index} variant="body1" sx={{marginBottom: 2}}>
                <TextParser content={node.children} />
              </Typography>
            );
        }
      })}
    </>
  );
}
