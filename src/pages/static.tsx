import type {InferGetStaticPropsType, GetStaticProps} from 'next';
import {Box, Container, Typography} from '@mui/material';

type BlogData = {
  docs: [];
};

export const getStaticProps: GetStaticProps<{data: BlogData}> = async () => {
  const res = await fetch('https://payload-cms-test-production.up.railway.app/api/posts');
  const data = await res.json();
  return {props: {data}};
};

export default function Static({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('here are static post data', data);
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
          Static Site Generation
        </Typography>
      </Box>
    </Container>
  );
}
