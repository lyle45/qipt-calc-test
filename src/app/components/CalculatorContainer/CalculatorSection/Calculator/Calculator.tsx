'use client';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import PaymentGrid from '@/app/components/CalculatorContainer/CalculatorSection/Calculator/PaymentGrid/PaymentGrid';
import PriceInput from '@/app/components/CalculatorContainer/CalculatorSection/Calculator/PriceInput/PriceInput';
import { grey } from '@mui/material/colors';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
