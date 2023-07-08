import type {InferGetStaticPropsType, GetStaticProps} from 'next';
import {useState} from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import SimpleCard from '@/components/Card';

type PostTags = {
  id: string;
  name: string;
};
type PostData = {
  id: string;
  title: string;
  tags: PostTags[];
};
type BlogData = {
  docs: PostData[];
};

export const getStaticProps: GetStaticProps<{data: BlogData}> = async () => {
  const res = await fetch('https://payload-cms-test-production.up.railway.app/api/posts');
  const data = await res.json();
  return {props: {data}};
};

export default function Static({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedTag, setSelectedTag] = useState('');
  const filteredPost = data.docs.filter(
    item => !selectedTag! || (item.tags && item.tags.some(tag => tag.name === selectedTag))
  );

  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
          Static Site Generation
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {filteredPost.map(post => {
          const {
            title,
            id,
            featuredImage: {url},
            publishedDate,
            author,
            content,
          } = post;
          return (
            <SimpleCard
              key={id}
              id={id}
              title={title}
              img={url}
              publishedDate={publishedDate}
              author={author}
              content={content}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
