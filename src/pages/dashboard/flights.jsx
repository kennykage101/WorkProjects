import * as React from 'react';
import { Avatar, Box } from '@mui/joy';
import Container from '@mui/joy/Container';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { AirplaneTilt as AirplaneTiltIcon } from '@phosphor-icons/react/dist/ssr/AirplaneTilt';
import { Helmet } from 'react-helmet-async';

import { config } from '@/config';

// import { Inbox } from '@/components/dashboard/overview/inbox';
// import { Orders } from '@/components/dashboard/overview/orders';
// import { SessionsByDevice } from '@/components/dashboard/overview/sessions-by-device';
// import { Stats } from '@/components/dashboard/overview/stats';
// import { Tasks } from '@/components/dashboard/overview/tasks';
// import { UsersRealtime } from '@/components/dashboard/overview/users-realtime';

const metadata = {
  title: `Flights | Dashboard | ${config.site.name}`,
};

export function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <main>
        <Container maxWidth={false} sx={{ py: 3 }}>
          <Stack spacing={1} direction="row">
            <Avatar
              color="primary"
              sx={{
                '--Avatar-radius': 'var(--joy-radius-sm)',
                '--Avatar-size': '36px',
                '--Icon-fontSize': 'var(--joy-fontSize-lg)',
              }}
            >
              <AirplaneTiltIcon style={{ fontSize: 'var(--Icon-fontSize)' }} weight="bold" />
            </Avatar>
            <div>
              <Typography fontSize={{ xs: 'xl3', lg: 'xl4' }} level="h1">
                Flights
              </Typography>
            </div>
          </Stack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={3}
            sx={{ backgroundColor: 'blue', width: '100%', height: 500, borderRadius: 4, bgcolor: 'primary.800' }}
          >
            <Stack spacing={7} direction="row">
              <Box
                sx={{
                  bgcolor: 'var(--joy-palette-common-white)',
                  p: 1.5,
                  borderRadius: 4
                }}
              >
                <Typography sx={{ color: 'var(--joy-palette-neutral-900)' }}>ROUND TRIP</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'var(--joy-palette-common-white)',
                  p: 1.5,
                  borderRadius: 4
                }}
              >
                <Typography sx={{ color: 'var(--joy-palette-neutral-900)' }}>ONE WAY</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'var(--joy-palette-common-white)',
                  p: 1.5,
                  borderRadius: 4
                }}
              >
                <Typography fontSize={16} sx={{ color: 'var(--joy-palette-neutral-900)' }}>MULTI-CITY</Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}
