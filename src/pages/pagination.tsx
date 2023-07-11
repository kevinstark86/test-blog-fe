import {Box, Container, Typography, CircularProgress} from '@mui/material';
import {useGetAllPostsQuery} from '@/redux/services/postAPi';

export default function Pagination() {
  const {data, error, isLoading} = useGetAllPostsQuery();
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
          <Typography variant="h4">Check console logs</Typography>
        ) : null}
      </Box>
    </Container>
  );
}
