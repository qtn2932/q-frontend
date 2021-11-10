import React, { useContext } from 'react';
import AuthContext from './store/auth-context';

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="App">
      {ctx.isLoggedIn ? (
        <div>
          {ctx.currentUser}
          {' '}
        </div>
      ) : <button type="button" onClick={ctx.logIn}>Connect Metamask</button>}
    </div>
  );
};

export default App;
