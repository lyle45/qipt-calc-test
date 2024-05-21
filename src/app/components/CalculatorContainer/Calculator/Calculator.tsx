'use client';

import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import PaymentGrid from '@/app/components/CalculatorContainer/Calculator/PaymentGrid/PaymentGrid';
import PriceInput from '@/app/components/CalculatorContainer/Calculator/PriceInput/PriceInput';

export default function Calculator() {
  const [confirmedPrice, setConfirmedPrice] = useState<number>();

  return (
    <Box sx={{ width: '324px', height: '252px' }}>
      <PriceInput onCalculate={setConfirmedPrice} />
      <Box sx={{ my: 3 }}>
        <PaymentGrid price={confirmedPrice} />
      </Box>
    </Box>
  );
}
