import { Box } from '@mui/material';
import { Header } from '@/app/components/Header/Header';
import Main from '@/app/components/Main/Main';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return await import(`@/app/assets/companies-metadata/${params.id}.json`);
}

export default async function LoanCalculator({ params }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header companyId={params.id} />
      <Main />
    </Box>
  );
}
