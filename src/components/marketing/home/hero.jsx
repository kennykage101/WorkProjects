'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Container from '@mui/joy/Container';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

import { config } from '@/config';
import { paths } from '@/paths';
import { Image } from '@/components/core/image';
import { RouterLink } from '@/components/core/link';

export function Hero() {
  return (
    // NOTE: Transform style property is required to fix
    // Safari issue with perspective property messing the zIndex of other elements.
    <Box component="section" sx={{ position: 'relative', transformStyle: 'preserve-3d' }}>
      <Box
        sx={{
          bgcolor: 'var(--joy-palette-neutral-950)',
          color: 'var(--joy-palette-common-white)',
          overflow: 'hidden',
          pb: {
            xs: '180px',
            sm: '240px',
            md: '440px',
          },
          position: 'relative',
          pt: {
            xs: '180px',
            md: '240px',
          },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            height: '600px',
            left: '50%',
            opacity: 0.5,
            pointerEvents: 'none',
            position: 'absolute',
            top: '-140px',
            transform: 'translate(-50%, 0)',
            width: '1600px',
            zIndex: 1,
          }}
        >
          <Image alt="pattern" fill priority sizes="1600px" src="/assets/hero-grid-pattern.png" />
        </Box>
        <Box
          sx={{
            // You might like it, so remove the display: 'none'
            display: 'block',
            height: '500px',
            left: '50%',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            transform: 'translate(-50%, 0)',
            width: '1600px',
            zIndex: 2,
          }}
        >
          <Image alt="gradient" fill sizes="1600px" src="/assets/hero-gradient.png" />
        </Box>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3 }}>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Stack spacing={3}>
              <Typography
                fontSize={{
                  xs: '32px',
                  sm: '46px',
                  md: '56px',
                }}
                fontWeight="xl"
                textAlign="center"
                textColor="inherit"
              >
                {config.site.name} Dashboard: Your Preferred Travel Solutions
              </Typography>
              <Typography
                fontSize={{
                  xs: 'md',
                  sm: 'lg',
                  md: 'xl',
                }}
                fontWeight="sm"
                textAlign="center"
                textColor="neutral.400"
              >
                Take your journey to the next level with Hayaan Travel solutions. The sky is just the beginning
              </Typography>
              <Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
                <Button
                  color="neutral"
                  component="a"
                  href="https://mui.com/store/items/lotru"
                  sx={{
                    bgcolor: 'var(--joy-palette-common-white)',
                    color: 'var(--joy-palette-neutral-900)',
                    '&:hover': {
                      bgcolor: 'var(--joy-palette-neutral-50)',
                    },
                  }}
                >
                  Search Flights
                </Button>
                <Button component={RouterLink} href={paths['dashboard']}>
                  Book Flights
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </Container>
      </Box>
      <Box
        sx={{
          position: 'relative',
          mt: {
            xs: '-100px',
            sm: '-200px',
            md: '-300px',
            lg: '-324px',
          },
          px: {
            xs: 2,
            lg: 3,
          },
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ transformPerspective: '250rem', rotateX: -40, scale: 0.9 }}
          style={{ maxWidth: '1152px', margin: '0 auto' }}
          transformTemplate={({ transformPerspective, rotateX, scale }) => {
            return `perspective(${transformPerspective}) rotateX(${rotateX}) scale(${scale})`;
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          whileInView={{ transformPerspective: '100rem', rotateX: 0, scale: 1 }}
        >
          <Box
            sx={{
              borderRadius: 'var(--joy-radius-lg)',
              boxShadow: 'var(--joy-shadow-md)',
              height: 0,
              outline: '4px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              position: 'relative',
              pt: 'calc(648 / 1152 * 100%)',
            }}
          >
            <Image
              alt="travellers"
              fill
              priority
              sizes="1152px"
              src="/assets/travellers_going_to_airport.webp"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
