'use client';

import { Typography, useTheme } from '@mui/material';

interface BalanceCardProps {
  amount: number;
  currency?: string;
  updatedAt: Date | string; // Allow both Date and string
}

export const BalanceCard = ({
  amount,
  currency = '$',
  updatedAt = new Date(),
}: BalanceCardProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: theme.spacing(3),
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
        Total Balance
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {currency}
        {amount.toLocaleString()}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
        Updated{' '}
        {new Date(updatedAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </Typography>
    </div>
  );
};
