import React from 'react';
import { Nav } from 'react-bootstrap';

import './Dashboard.css';

const SideBar = () => (
  <>
    <Nav className="col-md-12 d-none d-md-block bg-dark sidebar">
      <Nav.Item>
        <Nav.Link href="/account" eventKey="account-link">Account</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" eventKey="dash-board-link">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
);

export default SideBar;
