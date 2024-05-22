import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledBoxDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 700,
  textAlign: 'start',
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    textAlign: 'center',
  },
}));

const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  color: grey[700],
  textAlign: 'start',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'block',
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const TitleDescription = () => (
  <StyledBoxDescription>
    <Stack>
      <StyledTypographyTitle variant="h6">Monthly Payments Calculator</StyledTypographyTitle>
      <StyledTypographyDescription variant="body2">
        Enter a price to see your estimated monthly payment.
      </StyledTypographyDescription>
    </Stack>
    <StyledButton variant="contained" color="primary">
      Get prequalified now
    </StyledButton>
  </StyledBoxDescription>
);

export default TitleDescription;
