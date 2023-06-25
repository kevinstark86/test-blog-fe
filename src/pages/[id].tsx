import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';

import {Container, Typography} from '@mui/material';

type PostType = {};
export const getServerSideProps: GetServerSideProps<{postData: PostType}> = async context => {
  const {id} = context.params as {id: string};
  const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/posts/${id}`);
  const postData = await res.json();
  return {props: {postData}};
};

export default function Post({postData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(postData);
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'lightsalmon',
      }}
    >
      <Typography variant="h1" align="center">
        This is the post page
      </Typography>
    </Container>
  );
}
