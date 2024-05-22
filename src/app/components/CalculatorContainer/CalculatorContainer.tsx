'use client';
import { Box, styled } from '@mui/material';
import TitleDescription from './TitleDescription/TitleDescription';
import CalculatorSection from './CalculatorSection/CalculatorSection';
import Disclaimer from './Disclaimer/Disclaimer';

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: `${theme.spacing(9)} ${theme.spacing(9)} 0`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 1, 1, 1),
  },
}));

const CalculatorContainer = () => (
  <StyledBoxContainer>
    <TitleDescription />
    <CalculatorSection />
    <Disclaimer />
  </StyledBoxContainer>
);

export default CalculatorContainer;
