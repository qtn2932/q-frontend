import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import SideBar from './Sidebar';

const DashBoard = () => (
  <>
    <Container fluid>
      <Row>
        <Col id="sidebar-wrapper">
          <SideBar />
        </Col>
        <Col id="page-content-wrapper">
          The rest of the content
        </Col>
      </Row>
    </Container>
  </>
);

export default DashBoard;
