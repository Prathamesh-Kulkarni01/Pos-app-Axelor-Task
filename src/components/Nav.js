import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container style={{margin:'0 2px'}}>
        <Navbar.Brand  href="#">Axelor POS</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;