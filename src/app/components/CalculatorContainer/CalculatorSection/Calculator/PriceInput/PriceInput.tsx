'use client';
import { ChangeEvent, useState } from 'react';
import { Button, styled, TextField } from '@mui/material';

interface Props {
  onCalculate: (price: number) => void;
  initialValue?: number;
}

const StyledTextField = styled(TextField)({
  borderRadius: '6px',
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#F5EAFF',
  color: '#5D25A9',
  fontSize: '14px',
  minWidth: 'auto',
  borderRadius: '100px',
  textTransform: 'none',
  boxShadow: 'none',
  padding: `0 ${theme.spacing(1.5)}`,
  '&:hover': {
    color: 'white',
  },
}));

export default function PriceInput({ initialValue, onCalculate }: Props) {
  const [price, setPrice] = useState<number | string>(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setPrice(value);
    } else {
      setPrice(+e.target.value);
    }
  };

  return (
    <StyledTextField
      value={price}
      type={'number'}
      fullWidth
      placeholder={'Expected total price'}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onCalculate(+price);
        }
      }}
      InputProps={{
        endAdornment: (
          <StyledButton variant={'contained'} onClick={() => onCalculate(+price)}>
            Calculate
          </StyledButton>
        ),
      }}
    />
  );
}
