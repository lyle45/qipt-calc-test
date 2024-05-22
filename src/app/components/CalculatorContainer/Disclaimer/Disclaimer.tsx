import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const Disclaimer: React.FC = () => (
  <Typography sx={{ color: grey[700] }} variant="caption">
    This is indicative monthly pricing, subject to eligibility check and final approval by our
    Financing Providers. Qipt is not a lender and does not make loans, loan commitments or
    lock-rates. Estimated payment amount does not include taxes or shipping fees. Monthly payment
    amounts and financing terms will vary based on the applicant&apos;s eligibility and
    creditworthiness and are subject to change.
  </Typography>
);

export default Disclaimer;
