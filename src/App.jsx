import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import {
  Route,
  Routes,
} from 'react-router-dom';
import {
  Container,
} from 'react-bootstrap';
import Account from './components/Account';
import DashBoard from './components/UI/Dashboard';

const App = () => {
  const {
    isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    // <Layout style={{ height: '100vh', overflow: 'auto' }}>
    //   <Router>
    //     <Header>
    //       <Menu
    //         theme="light"
    //         mode="horizontal"
    //         style={{
    //           display: 'flex',
    //           fontSize: '17px',
    //           fontWeight: '500',
    //           width: '100%',
    //           justifyContent: 'center',
    //         }}
    //       >
    //         <Menu.Item key="account">
    //           <NavLink to="/account">Account</NavLink>
    //         </Menu.Item>
    //       </Menu>
    //     </Header>
    //     <div>
    //       <Routes>
    //         <Route path="/account" element={<Account />} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </Layout>
    <Container fluid>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Container>
  );
};

export default App;
