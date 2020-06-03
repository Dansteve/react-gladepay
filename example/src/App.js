import React from 'react';
import logo from './logo.svg';
import {useGladepayPayment, GladepayButton, GladepayConsumer} from './dist/index.es';
import './App.css';

const config = {
  MID: 'GP0000001',
  title: 'GladePay Test',
  description: 'Experience GladePay Checkout',
  firstname: 'Customer',
  lastname: 'Customer',
  email: 'danstevea@gmail.com',
  amount: 1,
  country: 'NG',
  currency: 'NGN',
  payment_method: ['card', 'bank', 'ussd', 'qr', 'mobilemoney'],
  is_production:true,
  logo: 'https://www.glade.ng/favicon-32x32.png',
};

const GladepayHookExample = () => {
  const initializePayment = useGladepayPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment();
        }}
      >
        Gladepay Hooks Implementation
      </button>
    </div>
  );
};

function App() {
  const componentProps = {
    ...config,
    text: 'Gladepay Button Implementation',
    onSuccess: (response) => console.log(response),
    onClose: (response) => console.log(response),
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={config.logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Implementation Gladepay React
        </a>
      </header>
      <div>
        <GladepayHookExample className="btn" />
      </div>
      <div>
      <GladepayButton {...componentProps} className="btn" />
      </div>
      <div>
      <GladepayConsumer {...componentProps} className="btn">
        {({initializePayment}) => (
          <button onClick={() => initializePayment()}>Gladepay Consumer Implementation</button>
        )}
      </GladepayConsumer>
       </div>
    </div>
  );
}

export default App;
