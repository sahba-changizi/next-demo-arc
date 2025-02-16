'use client';

import { Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface DashboardHeaderProps {
  title: ReactNode;
}

export const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 4,
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.75rem',
          mb: 3,
        },
      }}
    >
      {title}
    </Typography>
  );
};
