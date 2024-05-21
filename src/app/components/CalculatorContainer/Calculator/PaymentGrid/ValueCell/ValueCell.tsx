import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { PaymentDueTime, pmt } from 'financial';
import { grey } from '@mui/material/colors';

interface Props {
  price?: number;
  rate: number;
  nper: number;
  rowIndex: number;
  cellIndex: number;
}

const calculatePMT = (rate: number, nper: number, pv: number): number => {
  return pmt(rate, nper, pv, 0, PaymentDueTime.Begin);
};

const getQC = (price: number) => {
  if (price < 25000) return 0.06;
  if (price < 50000) return 0.04;
  if (price < 100000) return 0.03;
  return 0.02;
};

const ValueCell = ({ rate, nper, price, rowIndex, cellIndex }: Props) => {
  const [payment, setPayment] = useState('-');

  useEffect(() => {
    if (price) {
      const pv = price * (1 + getQC(price));
      const pmt = calculatePMT(rate, nper, pv).toFixed(2);
      setPayment(`${pmt}`);
    }
  }, [price, rate, nper]);

  return (
    <Grid
      item
      xs
      sx={{
        backgroundColor: 'white',
        outline: `${grey[300]} solid 1px`,
        marginTop: '1px',
        marginLeft: '1px',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        borderTopLeftRadius: rowIndex === 0 && cellIndex === 0 ? 8 : 0,
        borderTopRightRadius: rowIndex === 0 && cellIndex === 2 ? 8 : 0,
        borderBottomLeftRadius: rowIndex === 2 && cellIndex === 0 ? 8 : 0,
        borderBottomRightRadius: rowIndex === 2 && cellIndex === 2 ? 8 : 0,
      }}
    >
      <Typography variant="body1">{payment}</Typography>
    </Grid>
  );
};

export default ValueCell;
