import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';

const ContractContext = React.createContext({
  approve: () => {},
  deposit: () => {},
  withdraw: () => {},
  pendingQentry: () => {},
  harvest: () => {},
  harvestAll: () => {},
});

export const ContractContextProvider = (props) => {
  const { authenticate, isAuthenticated } = useMoralis();

  const connectMetamask = () => {
    authenticate({ signingMessage: 'Allow contract interaction', chainId: 137 });
  };

  const approve = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };

  const deposit = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };

  const withdraw = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };

  const pendingQentry = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };

  const harvest = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };

  const harvestAll = async () => {
    if (!isAuthenticated) {
      connectMetamask();
    }
  };
  return (
    <ContractContext.Provider
      value={{
        approve,
        deposit,
        withdraw,
        pendingQentry,
        harvest,
        harvestAll,
      }}
    >
      {props.children}
    </ContractContext.Provider>
  );
};
export default ContractContext;
