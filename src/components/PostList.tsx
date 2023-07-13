import React, {useState} from 'react';
import {
  useGetAllPostsQuery,
  useGetPostsByTagQuery,
  useGetAllTagsQuery,
} from '@/redux/services/postAPi';
import SimpleCard from '@/components/Card';
import {Box, CircularProgress, Grid, Typography, Button} from '@mui/material';

export default function PostList() {
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState('');

  let data;
  let error;
  let isLoading;
  const allPostsQuery = useGetAllPostsQuery(page);
  const postsByTagQuery = useGetPostsByTagQuery(tag);
  const {data: tagData, error: tagError, isLoading: tagLoading} = useGetAllTagsQuery();

  if (tag) {
    ({data, error, isLoading} = postsByTagQuery);
  } else {
    ({data, error, isLoading} = allPostsQuery);
  }

  const pagesArray = Array(data?.totalPages)
    .fill(0)
    .map((_, index) => index + 1);

  const onPageClickHandler = (num: number) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onTagClickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
    setTag(e.currentTarget.value);

  const onAllPostsClickHandler = () => setTag('');

  return (
    <Box>
      <Box sx={{marginBottom: 5}}>
        <Button size="small" variant="contained" onClick={onAllPostsClickHandler}>
          All Posts
        </Button>
        {/* eslint-disable-next-line no-nested-ternary */}
        {tagError ? (
          <Typography variant="body1" color="red">
            There has been an error loading tags
          </Typography>
        ) : // eslint-disable-next-line no-nested-ternary
        tagLoading ? (
          <CircularProgress />
        ) : tagData ? (
          <>
            {tagData.docs.map((item, index) => (
              <Button
                key={index}
                value={item.name}
                size="small"
                variant="contained"
                sx={{margin: 0.5}}
                onClick={onTagClickHandler}
              >
                {item.name}
              </Button>
            ))}
          </>
        ) : null}
      </Box>
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? (
        <Typography variant="body1" color="red">
          There has been an error
        </Typography>
      ) : // eslint-disable-next-line no-nested-ternary
      isLoading ? (
        <CircularProgress />
      ) : data ? (
        <>
          <Grid container spacing={2} sx={{marginBottom: 5}}>
            {data.docs.map(post => {
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
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="outlined">prev</Button>
            {pagesArray.map((pageIndex, index) => (
              <Button key={index} variant="outlined" onClick={() => onPageClickHandler(pageIndex)}>
                {pageIndex}
              </Button>
            ))}
            <Button variant="outlined">next</Button>
          </Box>
        </>
      ) : null}
    </Box>
  );
}
