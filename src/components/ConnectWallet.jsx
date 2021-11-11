import React from 'react';
import { useMoralis } from 'react-moralis';

const ConnectWallet = () => {
  const {
    authenticate, isAuthenticated, user, logout, isAuthenticating,
  } = useMoralis();
  const connectMetamask = () => {
    authenticate({ signingMessage: 'Allow contract interaction', chainId: 137 });
  };
  if (!isAuthenticated) {
    return (
      <div>
        <button
          type="button"
          onClick={connectMetamask}
        >
          Authenticate
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>
        Welcome
        {' '}
        {user.get('ethAddress')}
      </h1>
      <button type="button" onClick={() => logout()} disabled={isAuthenticating}>Log Out</button>
    </div>
  );
};
export default ConnectWallet;
