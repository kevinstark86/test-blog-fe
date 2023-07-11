import type {InferGetStaticPropsType, GetStaticProps} from 'next';
import React, {useState} from 'react';
import {Box, Container, Typography, Grid, Button} from '@mui/material';
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

export const getStaticProps: GetStaticProps<{data: BlogData; postTags: PostTags}> = async () => {
  const resPost = await fetch('https://payload-cms-test-production.up.railway.app/api/posts');
  const postData = await resPost.json();
  const resTags = await fetch('https://payload-cms-test-production.up.railway.app/api/tags');
  const tags = await resTags.json();
  return {props: {data: postData, postTags: tags}};
};

export default function Static({data, postTags}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedTag, setSelectedTag] = useState('');
  const filteredPost = data.docs.filter(
    item => !selectedTag! || (item.tags && item.tags.some(tag => tag.name === selectedTag))
  );

  const onTagClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTag(e.currentTarget.value);
  };

  const allPostHandler = () => {
    setSelectedTag('');
  };

  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
          Static Site Generation
        </Typography>
      </Box>
      <Box sx={{marginBottom: 2}}>
        <Button size="small" onClick={allPostHandler}>
          All Posts
        </Button>
        {
          // @ts-ignore
          postTags.docs.map(tag => {
            const {id, name} = tag;
            return (
              <Button key={id} value={name} size="small" onClick={onTagClickHandler}>
                {name}
              </Button>
            );
          })
        }
      </Box>
      <Grid container spacing={2}>
        {
          // need to set up types properly
          filteredPost.map(post => {
            const {
              title,
              id,
              // @ts-ignore
              featuredImage: {url},
              // @ts-ignore
              publishedDate,
              // @ts-ignore
              author,
              // @ts-ignore
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
          })
        }
      </Grid>
    </Container>
  );
}
