import {useRouter} from 'next/router';

import {Card, CardContent, Typography, CardActions, Grid, Button, CardMedia} from '@mui/material';

type CardProps = {
  id: string;
  title: string;
};

export default function SimpleCard({id, title}: CardProps) {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/${id}`);
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined">
        <CardMedia sx={{height: 240}} image="./images/test-img.jpg" />
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Word of the day
          </Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Some test words for a card
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
