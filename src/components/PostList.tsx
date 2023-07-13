import {useState} from 'react';
import {useGetAllPostsQuery} from '@/redux/services/postAPi';
import SimpleCard from '@/components/Card';
import {Box, CircularProgress, Grid, Typography, Button} from '@mui/material';

export default function PostList() {
  const {data, error, isLoading} = useGetAllPostsQuery();

  const pagesArray = Array(data?.totalPages)
    .fill(0)
    .map((_, index) => index + 1);

  const [page, setPage] = useState(1);

  const onPageClickHandler = (num: number) => {
    return setPage(num);
  };

  return (
    <Box>
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
