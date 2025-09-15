import { configureStore, createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    invoices: [
      { id: 1, clientName: 'Client Name', date: '25th Jan, 2023', status: 'Paid' },
      { id: 2, clientName: 'Client Name', date: '25th Jan, 2023', status: 'Unpaid' },
      { id: 3, clientName: 'Income Trend', date: '25th Jan, 2023', status: 'Paid' },
      { id: 4, clientName: 'Client Name', date: '25th Jan, 2023', status: 'Overdue' },
      { id: 5, clientName: 'Client Name', date: '25th Jan, 2023', status: 'Partially Paid' },
      // Add more dummy data as needed
    ],
    totalEarnings: 1250000,
    paymentAwaited: 25000,
    paymentOverdue: 25000,
  },
  reducers: {
    updateInvoiceStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const invoice = state.invoices.find(inv => inv.id === id);
      if (invoice) {
        invoice.status = newStatus;
      }
    },
  },
});

export const { updateInvoiceStatus } = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});