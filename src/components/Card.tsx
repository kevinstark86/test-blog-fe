import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';

export default function SimpleCard() {
  return (
    <Card>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Word of the day
        </Typography>
        <Typography variant="h5">Smileeeh</Typography>
        <Typography variant="body2">A sensational dog that lives on the beach.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
