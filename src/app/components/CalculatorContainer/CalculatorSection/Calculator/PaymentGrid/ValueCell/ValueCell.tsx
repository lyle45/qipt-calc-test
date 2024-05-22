import React, { useEffect, useRef, useState } from 'react';
import { Grid, Slide, styled, Typography } from '@mui/material';
import { PaymentDueTime, pmt } from 'financial';
import { grey } from '@mui/material/colors';

const getQC = (price: number) => {
  if (price < 25000) return 0.06;
  if (price < 50000) return 0.04;
  if (price < 100000) return 0.03;
  return 0.02;
};

const calculatePMT = (rate: number, nper: number, pv: number): number => {
  return pmt(rate, nper, pv, 0, PaymentDueTime.Begin);
};

const StyledValueCell = styled(Grid)({
  backgroundColor: 'white',
  outline: `${grey[300]} solid 1px`,
  marginTop: '1px',
  marginLeft: '1px',
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  zIndex: 99,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  padding: theme.spacing(0, 0.5),
}));

interface Props {
  price?: number;
  rate: number;
  nper: number;
  rowIndex: number;
  cellIndex: number;
}

const ValueCell = ({ rate, nper, price, rowIndex, cellIndex }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [payment, setPayment] = useState('-');
  const [show, setShow] = useState(false);
  const transitionDelay = rowIndex * 100 + cellIndex * 100;

  useEffect(() => {
    const exitTransitionTimer = setTimeout(() => {
      setShow(false);
    }, transitionDelay);

    const enterTransitionTimer = setTimeout(() => {
      if (price) {
        const pv = price * (1 + getQC(price));
        const pmt = calculatePMT(rate, nper, pv).toFixed(2);
        setPayment(pmt);
      } else {
        setPayment('-');
      }
      setShow(true);
    }, transitionDelay + 300);

    return () => {
      clearTimeout(enterTransitionTimer);
      clearTimeout(exitTransitionTimer);
    };
  }, [price, rate, nper]);

  return (
    <StyledValueCell
      ref={containerRef}
      item
      xs
      sx={{
        borderTopLeftRadius: rowIndex === 0 && cellIndex === 0 ? 8 : 0,
        borderTopRightRadius: rowIndex === 0 && cellIndex === 2 ? 8 : 0,
        borderBottomLeftRadius: rowIndex === 2 && cellIndex === 0 ? 8 : 0,
        borderBottomRightRadius: rowIndex === 2 && cellIndex === 2 ? 8 : 0,
      }}
      title={payment}
    >
      <Slide
        direction={show ? 'right' : 'left'}
        in={show}
        mountOnEnter
        unmountOnExit
        container={containerRef.current}
      >
        <StyledTypography variant="body1">{payment}</StyledTypography>
      </Slide>
    </StyledValueCell>
  );
};

export default ValueCell;
