'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';


import { NoSSR } from '@/components/core/no-ssr';

const bars = [
  {
    name: 'This Year',
    dataKey: 'v1',
    color: 'var(--joy-palette-primary-solidBg)',
  },
  {
    name: 'Last Year',
    dataKey: 'v2',
    color: 'var(--joy-palette-primary-200)',
  },
];

export function Orders({ data = [] }) {
  const chartHeight = 440;

  return (
    <Card>
      <Typography level="h4">Orders</Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {bars.map((bar) => (
          <Stack direction="row" key={bar.name} spacing={1} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                bgcolor: bar.color,
                borderRadius: 'var(--joy-radius-xs)',
                height: '8px',
                width: '8px',
              }}
            />
            <Typography level="body-sm">{bar.name}</Typography>
          </Stack>
        ))}
      </Stack>
      <NoSSR fallback={<Box sx={{ height: `${chartHeight}px` }} />}>
      Sorry
      </NoSSR>
    </Card>
  );
}

function TooltipContent({ active, payload, label }) {
  if (!active) {
    return null;
  }

  return (
    <Sheet
      sx={{
        boxShadow: 'var(--joy-shadow-lg)',
        borderRadius: 'var(--joy-radius-sm)',
        border: '1px solid var(--joy-palette-neutral-outlinedBorder)',
        p: 1,
      }}
    >
      <Stack spacing={2}>
        <Typography level="title-md">{label}</Typography>
        {payload?.map((entry) => (
          <Stack direction="row" key={entry.name} spacing={2} sx={{ alignItems: 'center' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', flexGrow: 1 }}>
              <Box sx={{ bgcolor: entry.fill, borderRadius: '2px', height: '8px', width: '8px' }} />
              <Typography level="body-sm" textColor="text.primary">
                {entry.name}:
              </Typography>
            </Stack>
            <Typography level="body-xs" textAlign="right">
              {entry.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Sheet>
  );
}
