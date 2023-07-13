import Head from 'next/head';
import {Box, Container, Typography} from '@mui/material';
import PostList from '@/components/PostList';

export default function Pagination() {
  return (
    <>
      <Head>
        <title>A Sensational Blog</title>
        <meta
          name="description"
          content="A sensational blog with lots of interesting things to read. Mainly though, about things you don't care about"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Charset */}
        <meta charSet="utf-8" />

        {/* Viewport for responsive web design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourwebsite.com/page-url" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/images/og.jpg" />
        <meta property="og:title" content="A Sensational Blog" />
        <meta
          property="og:description"
          content="A sensational blog with lots of interesting things to read. Mainly though, about things you don't care about"
        />
        <meta property="og:image" content="http://localhost:3000/images/og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.yourwebsite.com/page-url" />
        <meta name="twitter:title" content="A Sensational Blog" />
        <meta
          name="twitter:description"
          content="A sensational blog with lots of interesting things to read. Mainly though, about things you don't care about"
        />
        <meta name="twitter:image" content="http://localhost:3000/images/og.jpg" />

        {/* Robots */}
        <meta name="robots" content="index,follow" />
      </Head>
      <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'lightskyblue'}}>
        <Box
          sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5}}
        >
          <Typography variant="h1">Pagination With RTKQ</Typography>
        </Box>
        <PostList />
      </Container>
    </>
  );
}
