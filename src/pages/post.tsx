import {Container, Typography} from '@mui/material';

export default function Post() {
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightsalmon'}}>
      <Typography variant="h1" align="center">
        This is the post page
      </Typography>
    </Container>
  );
}
