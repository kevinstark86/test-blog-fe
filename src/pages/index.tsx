// import Button from '@mui/material/Button';
import {Button, Container, Typography, Box, Grid} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SimpleCard from '@/components/Card';

export default function Home() {
  const theme = useTheme();
  return (
    <Container sx={{backgroundColor: 'lightBlue', paddingBottom: 10}}>
      <Button variant="contained">Hello Smiley!!!</Button>
      <Typography variant="h1" align="center" sx={{marginBottom: 10}}>
        This is a title using a heading
      </Typography>
      <Box marginBottom={7}>
        <Typography variant="body1">
          Tofu irony truffaut tonx pug pinterest fit leggings prism cred single-origin coffee
          gatekeep kogi pork belly asymmetrical. Venmo single-origin coffee next level wolf fanny
          pack, salvia blue bottle YOLO kinfolk selfies subway tile fixie vegan. Fam hexagon
          gastropub asymmetrical
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          truffaut, paleo vegan narwhal 90's quinoa. Blog DSA XOXO, copper mug ascot tofu chambray
          enamel pin kale chips plaid taxidermy post-ironic small batch cray authentic. Ennui paleo
          Brooklyn small batch asymmetrical tattooed cornhole jean shorts hammock.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SimpleCard />
        </Grid>
      </Grid>
    </Container>
  );
}
