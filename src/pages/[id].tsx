import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {Container} from '@mui/material';
import TextParser from '@/rich-text-parser/TextParser';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children?: RichTextNode[];
};

type PostType = {
  content: RichTextNode;
};

export const getServerSideProps: GetServerSideProps<{postData: PostType}> = async context => {
  const {id} = context.params as {id: string};
  const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/posts/${id}`);
  const postData = await res.json();
  return {props: {postData}};
};

export default function Post({postData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // @ts-ignore
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
    </Container>
  );
}
