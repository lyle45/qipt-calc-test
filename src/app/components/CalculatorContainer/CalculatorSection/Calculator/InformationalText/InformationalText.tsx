import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function InformationalText() {
  return (
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
  );
}
