'use client';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import PaymentGrid from '@/app/components/CalculatorContainer/CalculatorSection/Calculator/PaymentGrid/PaymentGrid';
import PriceInput from '@/app/components/CalculatorContainer/CalculatorSection/Calculator/PriceInput/PriceInput';
import { grey } from '@mui/material/colors';

export default function Calculator() {
  const [confirmedPrice, setConfirmedPrice] = useState<number>();

  return (
    <Box sx={{ width: '324px' }}>
      <PriceInput onCalculate={setConfirmedPrice} />
      <Box sx={{ my: 3 }}>
        <PaymentGrid price={confirmedPrice} />
        <Box sx={{ mt: 4.5, color: grey[700] }}>
          <Typography
            variant={'caption'}
            component={'div'}
            sx={{ textAlign: 'justify', textAlignLast: 'justify', mb: 2 }}
          >
            The approved monthly payment is a function of various factors, such as a company&apos;s
            length of time in business, its borrowing history, and the creditworthiness of the
            applicant.
          </Typography>
          <Typography variant={'caption'} component={'div'} align={'center'}>
            Most approvals get finalized in only 2-4 business hours.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
