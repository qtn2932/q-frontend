import React, { useState } from 'react';
import { ethers } from 'ethers';

const AuthContext = React.createContext({
  currentUser: null,
  isLoggedIn: false,
  provider: null,
  signer: null,
  logIn: () => {},
});
export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const updateEthers = async () => {
    const newProvider = await new ethers.providers.Web3Provider(window.ethereum);
    setProvider(newProvider);
    const newSigner = await newProvider.getSigner();
    setSigner(newSigner);
  };

  const handleUserChange = (account) => {
    setCurrentUser(account);
    updateEthers();
  };

  const logIn = async () => {
    let accounts = [];
    if (window.ethereum) {
      console.log('Yes Ethereum');
      accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsLoggedIn(!isLoggedIn);
      handleUserChange(accounts[0]);
    } else {
      alert('Please install metamask');
    }
    setProvider(null);
    setSigner(null);
  };
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        provider,
        signer,
        logIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
