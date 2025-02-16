'use client';

import Layout from '../components/Layout';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardChart } from '../components/dashboard/DashboardChart';
import { BalanceCard } from '../components/dashboard/BalanceCard';
import { TransactionsTable } from '../components/dashboard/TransactionsTable';
import { Grid, Container, Box } from '@mui/material';
import {
  CHART_DATA,
  TRANSACTION_DATA,
  BALANCE_DATA,
} from '@/constants';
import {Transaction} from "@/types";

const DashboardPage = () => {
  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <DashboardHeader title="Dashboard Overview" />

        {/* Main Content Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            '& > .MuiGrid-item': {
              paddingTop: '0 !important',
            },
          }}
        >
          {/* Chart Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                height: 400,
                position: 'relative',
                '& .recharts-surface': {
                  overflow: 'visible',
                },
              }}
            >
              <DashboardChart data={CHART_DATA} />
            </Box>
          </Grid>

          {/* Balance Card Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: 400,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { md: 400 },
                  ml: 'auto',
                }}
              >
                <BalanceCard {...BALANCE_DATA} />
              </Box>
            </Box>
          </Grid>

          {/* Table Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                width: 'calc(100% - 32px)', // Account for padding
                mx: 'auto',
              }}
            >
              <TransactionsTable data={TRANSACTION_DATA as Transaction[]} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
