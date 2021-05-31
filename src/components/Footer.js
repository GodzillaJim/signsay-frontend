import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = ({ attribution, author }) => {
  return (
    <Navbar fixed='bottom' bg='dark' className='navbar-fixed-bottom my-2'>
      <span className='mx-auto'>
        &copy; Copyright 2021{' '}
        <a target='_blank' href='http://jimna.dx.am'>
          GodzillaJim
        </a>
      </span>
      {attribution && author && (
        <span>
          Art by <a href={attribution}>{author}</a>
        </span>
      )}
    </Navbar>
  );
};

export default Footer;
