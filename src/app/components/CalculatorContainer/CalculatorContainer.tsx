'use client';
import { Box, Button, Stack, Typography } from '@mui/material';

import { grey } from '@mui/material/colors';

export default function CalculatorContainer() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          px: 9,
          pt: 9,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Stack>
            <Typography variant={'h4'}>Monthly Payments Calculator</Typography>
            <Typography variant={'body2'} sx={{ color: grey[700] }}>
              Enter a price to see your estimated monthly payment.
            </Typography>
          </Stack>
          <Button variant={'contained'} color={'primary'} sx={{ textTransform: 'none' }}>
            Get prequalified now
          </Button>
        </Box>
        <Stack
          gap={4}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            background: 'rgba(247, 238, 255, 0.5)',
            borderRadius: 2,
            px: { md: 8, sm: 2 },
            py: { md: 6, sm: 4 },
          }}
        >
          <Typography variant={'h5'} sx={{ fontWeight: 700 }}>
            Approximately how much will you pay per month?
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
