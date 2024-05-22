'use client';
import { Box, Grid, Typography, styled } from '@mui/material';
import ValueCell from './ValueCell/ValueCell';

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  height: '36px',
  padding: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: `-${theme.spacing(1)}`,
}));

const StyledCategoryGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  height: '50px',
  width: '122px',
  fontSize: '14px',
  fontWeight: '600',
  padding: theme.spacing(1),
  paddingRight: theme.spacing(2),
  borderTopLeftRadius: theme.spacing(0.5),
  borderBottomLeftRadius: theme.spacing(0.5),
  marginRight: `-${theme.spacing(1)}`,
}));

interface Props {
  price?: number;
}

export default function PaymentGrid({ price }: Props) {
  const npers = [36, 48, 60];
  const headers = [
    { label: '36 mo', color: 'primary.300' },
    { label: '48 mo', color: 'primary.main' },
    { label: '60 mo', color: 'primary.700' },
  ];
  const rows = [
    { category: 'Strong Credit', color: 'primary.300', rate: 0.08 / 12 },
    { category: 'Average Credit', color: 'primary.main', rate: 0.14 / 12 },
    { category: 'Weaker Credit', color: 'primary.700', rate: 0.19 / 12 },
  ];

  return (
    <Box sx={{ whiteSpace: 'nowrap' }}>
      <Grid container spacing={0} width={'100%'}>
        <Grid container spacing={0}>
          <Grid item sx={{ width: '122px', mr: -1 }}></Grid>
          {headers.map((header) => (
            <StyledHeaderGrid
              item
              key={header.label}
              xs
              sx={{
                backgroundColor: header.color,
              }}
            >
              <Typography variant="subtitle1" align="center">
                {header.label}
              </Typography>
            </StyledHeaderGrid>
          ))}
        </Grid>

        {rows.map((row, rowIndex) => (
          <Grid container sx={{ height: 50, flexWrap: 'nowrap' }} spacing={0} key={row.category}>
            <StyledCategoryGrid
              item
              sx={{
                backgroundColor: row.color,
              }}
            >
              <Typography variant="subtitle1">{row.category}</Typography>
            </StyledCategoryGrid>
            {npers.map((nper, cellIndex) => (
              <ValueCell
                key={nper}
                rate={row.rate}
                nper={nper}
                price={price}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                transitionDelay={rowIndex * 100 + cellIndex * 100}
              />
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
