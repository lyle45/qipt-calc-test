import { Box, Grid } from '@mui/material';
import CalculatorContainer from '@/app/components/CalculatorContainer/CalculatorContainer';
import FaqContainer from '@/app/components/FaqContainer/FaqContainer';

export default function Main() {
  return (
    <>
      <Grid container sx={{ overflow: 'auto' }}>
        <Grid item md={8} xs={12}>
          <CalculatorContainer />
        </Grid>
        <Grid item md={4} xs={12} sx={{ maxWidth: '595px' }}>
          <FaqContainer />
        </Grid>
      </Grid>
    </>
  );
}
