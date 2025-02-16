export interface ChartData {
  name: string;
  value: number;
}

export interface Transaction {
  id: string;
  date: Date;
  customer: {
    name: string;
    type: string;
  };
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}
