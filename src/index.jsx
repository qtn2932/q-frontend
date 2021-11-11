import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId={process.env.REACT_APP_APPLICATION_ID}
      serverUrl={process.env.REACT_APP_SERVER_URL}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
