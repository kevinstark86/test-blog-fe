import {Container, Typography} from '@mui/material';

export default function Post() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'lightsalmon',
      }}
    >
      <Typography variant="h1" align="center">
        This is the post page
      </Typography>
    </Container>
  );
}
