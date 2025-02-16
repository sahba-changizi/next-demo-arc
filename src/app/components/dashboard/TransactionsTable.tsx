'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { Transaction } from '@/types';

interface TransactionsTableProps {
  data: Transaction[];
}

export const TransactionsTable = ({ data }: TransactionsTableProps) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 3, color: theme.palette.text.secondary }}
      >
        Recent Transactions
      </Typography>
      <TableContainer
        sx={{
          borderRadius: '8px',
          border: `1px solid ${theme.palette.divider}`,
          overflowX: 'auto',
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead sx={{ bgcolor: theme.palette.background.default }}>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((transaction) => (
              <TableRow
                key={transaction.id}
                hover
                sx={{
                  '&:last-child td': { borderBottom: 0 },
                  transition: 'background-color 0.2s',
                }}
              >
                <TableCell>#TRX-{transaction.id.padStart(5, '0')}</TableCell>
                <TableCell>
                  {transaction.date.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </TableCell>
                <TableCell>
                  <Typography fontWeight={500}>
                    {transaction.customer.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {transaction.customer.type}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight={700}>
                    ${transaction.amount.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '4px',
                      bgcolor: theme.palette.success.light,
                      color: theme.palette.success.contrastText,
                      fontSize: '0.75rem',
                    }}
                  >
                    {transaction.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
