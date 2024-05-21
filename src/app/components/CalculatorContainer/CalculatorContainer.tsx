'use client';
import { Box, Button, Stack, styled, Typography } from '@mui/material';

import { grey } from '@mui/material/colors';
import Calculator from '@/app/components/CalculatorContainer/Calculator/Calculator';

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: `${theme.spacing(9)} ${theme.spacing(9)} 0`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 1, 1, 1),
  },
}));

const StyledBoxDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: 'rgba(247, 238, 255, 0.5)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(6, 8),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2),
  },
}));

export default function CalculatorContainer() {
  return (
    <>
      <StyledBoxContainer>
        <StyledBoxDescription>
          <Stack>
            <Typography variant={'h4'}>Monthly Payments Calculator</Typography>
            <Typography variant={'body2'} sx={{ color: grey[700] }}>
              Enter a price to see your estimated monthly payment.
            </Typography>
          </Stack>
          <Button variant={'contained'} color={'primary'} sx={{ textTransform: 'none' }}>
            Get prequalified now
          </Button>
        </StyledBoxDescription>
        <StyledStack gap={4}>
          <Typography variant={'h5'} sx={{ fontWeight: 700 }}>
            Approximately how much will you pay per month?
          </Typography>
          <Calculator />
        </StyledStack>
      </StyledBoxContainer>
    </>
  );
}
