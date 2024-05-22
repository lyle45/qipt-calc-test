import { CompanyMetadata } from '@/app/models/company-metadata';
import { AppBar, Box, Divider, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

interface Props {
  companyId: string;
}

export async function Header({ companyId }: Props) {
  let metadata: CompanyMetadata;
  try {
    metadata = await import(`@/app/assets/companies-metadata/${companyId}.json`);
  } catch (e) {
    console.error(e);
    metadata = { title: 'Qipt', logoUrl: 'logos/qipt-logo.svg', description: 'Qipt', faq: [] };
  }

  return (
    <AppBar sx={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.04)' }} position="static">
      <Toolbar
        sx={{
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Image src={metadata.logoUrl} width={137} height={24} alt={'Logo'} />

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flexDirection: 'row', display: { md: 'flex', xs: 'none' } }}>
            <Divider color={grey[300]} orientation={'vertical'} sx={{ height: '32px', mx: 4 }} />
            <Typography
              sx={{
                display: { md: 'block', xs: 'none' },
                color: 'black',
                fontSize: 18,
                fontWeight: 400,
              }}
              component="div"
            >
              {metadata.description}
            </Typography>
          </Box>
        </Box>
        <Image src={'logos/qipt-logo.svg'} alt={'Qipt logo'} width={64} height={32} />
      </Toolbar>
    </AppBar>
  );
}
