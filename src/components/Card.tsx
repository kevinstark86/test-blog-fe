import {useRouter} from 'next/router';
import dateFormatter from '@/utils/dateFormatter';
import wordCounter from '@/utils/wordCounter';
import readingTime from 'reading-time';
import {postSnippet} from '@/utils/postSnippet';
import {Author} from '@/types/types';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Button,
  CardMedia,
  Box,
} from '@mui/material';
import Gravatar from '@/components/Gravatar';

type RichTextNode = {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string | undefined;
  children?: RichTextNode[];
};

type CardProps = {
  id: string;
  title: string;
  img: string;
  publishedDate: string;
  author: Author;
  content: RichTextNode;
};

export default function SimpleCard({id, title, img, publishedDate, author, content}: CardProps) {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/${id}`);
  };

  const date = dateFormatter(publishedDate);

  // @ts-ignore
  const stats = wordCounter(content);
  const time = readingTime(stats);

  // @ts-ignore
  const description = postSnippet(content, 25);
  console.log('here is the description', description);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined">
        <CardMedia sx={{height: 240}} image={img} />
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            {date} -- {time.text}
          </Typography>
          <Typography variant="h5" sx={{marginBottom: 3}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box sx={{marginTop: 5}}>
            <Gravatar email={author.email} size={40} />
          </Box>
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
