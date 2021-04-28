import React, { useEffect } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../logo.png';

const AppBar = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        document
          .querySelector('#navbar')
          .classList.add('stick-custom', 'bg-light');
      } else {
        document
          .querySelector('#navbar')
          .classList.remove('stick-custom', 'bg-light');
      }
    };
  });
  return (
    <Navbar
      id='navbar'
      expand='lg'
      className='p-md-3'
      fixed={'top'}
      style={{ height: window.innerWidth < 720 ? '13vh' : '10vh' }}
    >
      <Navbar.Brand href='#home'>
        <Image src={Logo} alt='signsay-logo' style={{ height: '45px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto text-primary p-1'>
          <Nav.Item>
            <Nav.Link className='text-primary text-bold' href='/#home'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-primary text-bold' href='/sign'>
              Sign
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-primary text-bold' href='/contribute'>
              Contribute
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
