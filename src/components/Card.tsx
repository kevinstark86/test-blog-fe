import {useRouter} from 'next/router';

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
  CardMedia,
} from '@mui/material';

export default function SimpleCard() {
  const router = useRouter();

  const handleClick = (): void => {
    router.push('/post');
  };

  return (
    <Card variant="outlined">
      <CardActionArea onClick={handleClick}>
        <CardMedia sx={{height: 240}} image="./images/test-img.jpg" />

        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Word of the day
          </Typography>
          <Typography variant="h5">Smileeeh</Typography>
          <Typography variant="body2" color="text.secondary">
            A sensational dog that lives on the beach.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
