import {Box, Container, Typography} from '@mui/material';

export default function Redux() {
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1">Redux Example</Typography>
      </Box>
    </Container>
  );
}
