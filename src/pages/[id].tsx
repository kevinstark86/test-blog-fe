import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {Container} from '@mui/material';
import Heading from '@/components/Heading';
import TextParagraph from '@/components/TextParagraph';

type ContentType = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: {text: string}[];
};
type PostType = {
  content: ContentType[];
};
export const getServerSideProps: GetServerSideProps<{postData: PostType}> = async context => {
  const {id} = context.params as {id: string};
  const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/posts/${id}`);
  const postData = await res.json();
  return {props: {postData}};
};

export default function Post({postData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'lightsalmon',
      }}
    >
      {postData.content.map((item, index) => {
        const {text} = item.children[0];
        if (item.type) {
          const {type} = item;
          return <Heading key={index} type={type} content={text} />;
        }
        return <TextParagraph key={index} content={text} />;
      })}
    </Container>
  );
}
