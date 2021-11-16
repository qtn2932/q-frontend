import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoralisDappProvider } from './providers/MoralisDappProvider/MoralisDappProvider';
import App from './App';

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = !!(APP_ID && SERVER_URL);
  if (isServerInfo) {
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <Router>
            <App isServerInfo />
          </Router>
        </MoralisDappProvider>
      </MoralisProvider>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      Not working
    </div>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
