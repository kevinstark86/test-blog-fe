import {RichTextNode} from '@/types/types';
import {Typography, Link, List, ListItem} from '@mui/material';
import {Variant} from '@mui/material/styles/createTypography';

type NodeTypes = {
  content: RichTextNode[];
};

export default function TextParser({content}: NodeTypes) {
  return (
    <>
      {content.map((node, index) => {
        if (!node.type) {
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
                {node.text}
                <TextParser content={node.children} />
              </Typography>
            );
          case 'ol':
            return (
              <List key={index}>
                <TextParser content={node.children} />
              </List>
            );
          case 'li':
            return (
              <ListItem key={index}>
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
                <TextParser content={node.children} />
              </Typography>
            );
        }
      })}
    </>
  );
}
