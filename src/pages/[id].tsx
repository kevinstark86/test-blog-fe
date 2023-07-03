import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {Container, Box, Button, Typography} from '@mui/material';
import TextParser from '@/rich-text-parser/TextParser';
import Gravatar from '@/components/Gravatar';
import dateFormatter from '@/utils/dateFormatter';
import {TagsNode} from '@/types/types';

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
      <Box sx={{marginTop: 10, marginBottom: 10}}>
        <Typography variant="body1" sx={{marginBottom: 3}}>
          Posted created by {name} on {dateFormatter(createdAt)}
        </Typography>
        <Gravatar email={email} size={100} />
        <Typography variant="body1">{name}</Typography>
      </Box>
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
