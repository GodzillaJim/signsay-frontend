import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar sticky='bottom' bg='dark' className='my-2'>
      <span className='mx-auto'>
        &copy; Copyright 2021{' '}
        <a target='_blank' href='http://jimna.dx.am'>
          GodzillaJim
        </a>
      </span>
    </Navbar>
  );
};

export default Footer;
