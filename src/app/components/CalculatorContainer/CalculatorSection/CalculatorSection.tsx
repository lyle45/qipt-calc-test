import { Stack, Typography, styled } from '@mui/material';
import Calculator from '@/app/components/CalculatorContainer/CalculatorSection/Calculator/Calculator';

const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: 'rgba(247, 238, 255, 0.5)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(6, 8),
  marginBottom: theme.spacing(3),
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2),
  },
}));

const CalculatorSection = () => (
  <StyledStack>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
      }}
    >
      Approximately how much will you pay per month?
    </Typography>
    <Calculator />
  </StyledStack>
);

export default CalculatorSection;
