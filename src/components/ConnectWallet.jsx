import React from 'react';

const ConnectWallet = (props) => {
  const [currentUser] = props;
  return (
    <div>
      <button type="submit">
        Connect metamask
        {currentUser}
      </button>
    </div>
  );
};
export default ConnectWallet;
