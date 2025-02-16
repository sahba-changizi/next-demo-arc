import { ChartData, Transaction } from '@/types';

export const CHART_DATA: ChartData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

export const TRANSACTION_DATA: Transaction[] = [
  {
    id: '12345',
    date: new Date(2025, 1, 15),
    customer: { name: 'John Doe', type: 'Customer' },
    amount: 250,
    status: 'completed',
  },
  {
    id: '12346',
    date: new Date(2025, 1, 14),
    customer: { name: 'Jane Smith', type: 'Customer' },
    amount: 500,
    status: 'completed',
  },
];

export const BALANCE_DATA = {
  amount: 12450,
  currency: '$',
  updatedAt: new Date(2025, 1, 15),
};
