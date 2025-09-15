import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInvoiceStatus } from '../redux/store';

const InvoiceList = () => {
  const invoices = useSelector(state => state.dashboard.invoices);
  const dispatch = useDispatch();

  const handleUpdateStatus = (id, newStatus) => {
    dispatch(updateInvoiceStatus({ id, newStatus }));
  };

  const getStatusButton = (status, id) => {
    const normalized = status?.toLowerCase();

    switch (normalized) {
      case 'paid':
        return <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm">Paid</span>;
      case 'unpaid':
        return <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-sm">Unpaid</span>;
      case 'overdue':
        return <span className="bg-orange-100 text-orange-700 py-1 px-3 rounded-full text-sm">Overdue</span>;
      case 'partially paid':
        return <span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm">Partially Paid</span>;
      default:
        return (
          <button 
            onClick={() => handleUpdateStatus(id, 'Paid')}
            className="bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm">
            Update Status
          </button>
        );
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Your Invoices</h2>
      <div className="space-y-3">
        {invoices.map(invoice => (
          <div key={invoice.id} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
            <div>
              <p className="font-semibold">{invoice.clientName}</p>
              <p className="text-sm text-gray-500">{invoice.date}</p>
            </div>
            {getStatusButton(invoice.status, invoice.id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
