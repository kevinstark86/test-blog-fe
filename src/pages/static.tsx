import {Box, Container, Typography} from '@mui/material';

export default function Static() {
  return (
    <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
          Static Site Generation
        </Typography>
      </Box>
    </Container>
  );
}
