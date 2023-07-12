import {Box, Container, Typography, CircularProgress, Grid} from '@mui/material';
import {useGetAllPostsQuery} from '@/redux/services/postAPi';
import SimpleCard from '@/components/Card';

export default function Pagination() {
  const {data, error, isLoading} = useGetAllPostsQuery();
  if (data) {
    console.log('query data response', data);
  }
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1">Pagination With RTKQ</Typography>
      </Box>
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
          <Grid container spacing={2}>
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
        ) : null}
      </Box>
    </Container>
  );
}
