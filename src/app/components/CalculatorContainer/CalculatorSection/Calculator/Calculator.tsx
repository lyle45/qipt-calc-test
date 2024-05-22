'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import PaymentGrid from './PaymentGrid/PaymentGrid';
import PriceInput from './PriceInput/PriceInput';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import InformationalText from './InformationalText/InformationalText';

export default function Calculator() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [confirmedPrice, setConfirmedPrice] = useState<number>(+(searchParams.get('price') || 0));

  const handleCalculate = (price: number) => {
    // no easier way to do that https://github.com/vercel/next.js/discussions/47583#discussioncomment-7476451
    const newParams = new URLSearchParams(searchParams);

    setConfirmedPrice(price);
    newParams.set('price', `${price}`);
    router.replace(`?${newParams}`);
  };

  return (
    <Box sx={{ width: '324px' }}>
      <PriceInput initialValue={confirmedPrice} onCalculate={handleCalculate} />
      <Box sx={{ my: 3 }}>
        <PaymentGrid price={confirmedPrice} />
        <InformationalText />
      </Box>
    </Box>
  );
}
