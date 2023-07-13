import {Box, Container, Typography} from '@mui/material';
import PostList from '@/components/PostList';

export default function Pagination() {
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5}}>
        <Typography variant="h1">Pagination With RTKQ</Typography>
      </Box>
      <PostList />
    </Container>
  );
}
