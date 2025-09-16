import React from 'react';
import Header from './components/Header';
import CreateInvoice from './components/CreateInvoice';
import Analytics from './components/Analytics';
import InvoiceList from './components/InvoiceList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css'; // Your Tailwind CSS file
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="p-2">
          <CreateInvoice />
          <Analytics />
          <InvoiceList />
        </main>
      </div>
    </Provider>
  );
}

export default App;