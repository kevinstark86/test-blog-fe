import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {Container, Box, Button, Typography} from '@mui/material';
import TextParser from '@/rich-text-parser/TextParser';
import {TagsNode} from '@/types/types';
import crypto from 'crypto';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children?: RichTextNode[];
};

type Author = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type PostType = {
  content: RichTextNode;
  tags: TagsNode[];
  author: Author;
};

export const getServerSideProps: GetServerSideProps<{postData: PostType}> = async context => {
  const {id} = context.params as {id: string};
  const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/posts/${id}`);
  const postData = await res.json();
  return {props: {postData}};
};

export default function Post({postData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {name, email, createdAt} = postData.author;
  return (
    <Container
      sx={{
        minHeight: '100vh',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'lightsalmon',
      }}
    >
      {/* @ts-ignore */}
      <TextParser content={postData.content} />
      <Box sx={{marginTop: 10}}>
        <Typography variant="body1">Tags:</Typography>
        {postData.tags &&
          postData.tags.map((tag, index) => (
            <Button key={index} size="small">
              {tag.name}
            </Button>
          ))}
      </Box>
    </Container>
  );
}
