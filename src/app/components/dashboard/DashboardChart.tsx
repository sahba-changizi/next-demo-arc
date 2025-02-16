'use client';

import { useTheme } from '@mui/material/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '../../../types';
import { Typography } from '@mui/material';

interface DashboardChartProps {
  data: ChartData[];
}

export const DashboardChart = ({ data }: DashboardChartProps) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 2, color: theme.palette.text.secondary }}
      >
        Revenue Overview
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: theme.palette.text.secondary }} />
          <YAxis tick={{ fill: theme.palette.text.secondary }} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: 'none',
              borderRadius: '8px',
              boxShadow: theme.shadows[3],
              color: theme.palette.text.primary,
            }}
          />
          <Bar
            dataKey="value"
            fill={theme.palette.primary.main}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
