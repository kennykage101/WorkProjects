'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Container from '@mui/joy/Container';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    author: 'Nalin Wijayasinghe',
    comment:
      'I highly recommend trying out Hayaan. The site is so intuitive and satisfies every of my demands.',
  },
  {
    id: 2,
    author: 'Victor Smith',
    comment:
      'This site is well organized, easy to understand and also easy to navigate. Another big 5 star factor is the support from the team. I had several questions before booking and they were all answered promptly with illustrations.',
  },
  {
    id: 3,
    author: 'Onions Daniel',
    comment:
      'I am incredibly thankful for the support I received and wanted to take this opportunity to share my positive experience with others. Your commitment to customer satisfaction is truly commendable, and I will undoubtedly continue to be a loyal customer.',
  },
  {
    id: 4,
    author: 'Laurence Bedford',
    comment:
      'Hayaan is not only amazing, the support that comes with it is impeccable. I wanted to correct an error and was running into some issues. The support went above and beyond to help me with my booking and it works seemlessly.',
  },
  {
    id: 5,
    author: 'Vedad Burgic',
    comment:
      'This website is amazing. It is going to reduce lot of booking stress from my side and speed up my arrival.',
  },
  {
    id: 6,
    author: 'Breno Rodrigues',
    comment: "One of the best design I've ever seen for dashboard. Very clean and useful!",
  },
];

export function Reviews() {
  const half = Math.ceil(reviews.length / 2);
  const reviewsCol1 = reviews.slice(0, half);
  const reviewsCol2 = reviews.slice(half);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <Container>
        <Box
          sx={{
            bgcolor: 'var(--joy-palette-background-level1)',
            borderRadius: 'var(--joy-radius-lg)',
            px: 3,
            py: '200px',
          }}
        >
          <Stack spacing={6} sx={{ maxWidth: 'md', mx: 'auto' }}>
            <Stack spacing={2}>
              <Typography color="primary" level="body-sm" textAlign="center">
                Reviews
              </Typography>
              <Typography level="h1" textAlign="center">
                What are our customers saying
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              <Grid md={6} xs={12}>
                <Stack spacing={3}>
                  {reviewsCol1.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </Stack>
              </Grid>
              <Grid md={6} xs={12}>
                <Stack spacing={3}>
                  {reviewsCol2.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>
    </motion.section>
  );
}

function ReviewCard({ author, comment }) {
  return (
    <Card sx={{ boxShadow: 'var(--joy-shadow-lg)', p: '6px' }}>
      <Box
        sx={{
          border: '1px solid var(--joy-palette-neutral-outlinedBorder)',
          borderRadius: 'var(--joy-radius-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          p: '24px',
        }}
      >
        <Typography sx={{ flexGrow: 1 }}>{comment}</Typography>
        <Typography level="title-sm">{author}</Typography>
      </Box>
    </Card>
  );
}
