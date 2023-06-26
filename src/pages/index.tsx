import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {Container, Typography, Box, Grid} from '@mui/material';
import SimpleCard from '@/components/Card';

type PostsApiData = {
  docs: [];
};

export const getServerSideProps: GetServerSideProps<{postApi: PostsApiData}> = async () => {
  const res = await fetch('https://payload-cms-test-production.up.railway.app/api/posts');
  const postApi = await res.json();
  return {props: {postApi}};
};

export default function Home({postApi}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const data = postApi.docs;
  return (
    <Container sx={{paddingBottom: 10, paddingTop: 10, backgroundColor: 'lightskyblue'}}>
      <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
        This is a title using a heading
      </Typography>
      <Box marginBottom={7}>
        <Typography variant="body1" color="text.secondary">
          Tofu irony truffaut tonx pug pinterest fit leggings prism cred single-origin coffee
          gatekeep kogi pork belly asymmetrical. Venmo single-origin coffee next level wolf fanny
          pack, salvia blue bottle YOLO kinfolk selfies subway tile fixie vegan. Fam hexagon
          gastropub asymmetrical
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          truffaut, paleo vegan narwhal 90's quinoa. Blog DSA XOXO, copper mug ascot tofu chambray
          enamel pin kale chips plaid taxidermy post-ironic small batch cray authentic. Ennui paleo
          Brooklyn small batch asymmetrical tattooed cornhole jean shorts hammock.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.map(post => {
          const {
            title,
            id,
            featuredImage: {url},
          } = post;
          return <SimpleCard key={id} id={id} title={title} img={url} />;
        })}
      </Grid>
    </Container>
  );
}
