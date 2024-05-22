'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { CompanyMetadata, FAQ } from '@/app/models/company-metadata';
import { useParams } from 'next/navigation';
import { grey } from '@mui/material/colors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyleBoxFaqContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  backgroundColor: grey[50],
  padding: theme.spacing(9, 4.5),
}));

const StyledAccordion = styled(Accordion)({
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  backgroundColor: 'transparent',
});

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'transparent',
  flexDirection: 'row-reverse',
  minHeight: 22,
  '&.Mui-expanded': {
    minHeight: 22,
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1, 0),
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2, 2, 2, 5),
}));

export default function FaqContainer() {
  const { id } = useParams();
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const metadata: CompanyMetadata = await import(
          `@/app/assets/companies-metadata/${id}.json`
        );
        setFaqData(metadata.faq);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const arr = new Array(10).fill(0);
  return (
    <StyleBoxFaqContainer>
      <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 4 }}>
        Basic FAQ for Customers:
      </Typography>
      {loading && arr.map((_, index) => <Skeleton key={index} sx={{ my: 1 }} />)}
      {!loading &&
        faqData.map((item, index) => {
          const panelId = `panel-${index}`;
          return (
            <StyledAccordion
              key={index}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
            >
              <StyledAccordionSummary
                expandIcon={expanded === panelId ? <ExpandLessIcon /> : <ChevronRightIcon />}
              >
                <Typography variant="body1">{item.question}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1">{item.answer}</Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          );
        })}{' '}
    </StyleBoxFaqContainer>
  );
}
