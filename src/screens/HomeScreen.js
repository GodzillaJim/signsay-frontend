import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SignLanding from '../images/sign-language.jpg';
import wideScreenImage from '../images/landing/sign-language_oqplmd_c_scale,w_1148.jpg';
import mediumScreenImage from '../images/landing/sign-language_oqplmd_c_scale,w_1400.jpg';
import ScreenImage from '../images/landing/sign-language_oqplmd_c_scale,w_908.jpg';
import smallScreenImage from '../images/landing/sign-language_oqplmd_c_scale,w_569.jpg';
import mobileScreenImage from '../images/landing/sign-language_oqplmd_c_scale,w_200.jpg';

const HomeScreen = () => {
  const [landingImage, setLandingImage] = useState(wideScreenImage);
  useEffect(() => {
    switch (window.innerWidth) {
      case window.innerWidth <= 200:
        setLandingImage(mobileScreenImage);
        break;
      case window.innerWidth <= 569 && window.innerWidth > 200:
        setLandingImage(smallScreenImage);
        break;
      case window.innerWidth > 569 &&
        window.innerWidth > 200 &&
        window.innerWidth <= 908:
        setLandingImage(ScreenImage);
        break;
      case window.innerWidth > 908 && window.innerWidth <= 1400:
        setLandingImage(mediumScreenImage);
        break;
      default:
        setLandingImage(wideScreenImage);
        break;
    }
  });
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main style={{ zIndex: '2' }} style={{ marginTop: '75px' }}>
        <section id='landing' style={{ zIndex: '1' }}>
          <Row style={{ height: window.innerWidth < 720 ? '87vh' : '90vh' }}>
            <Col>Welcome to SignSay! Get comfortable and sign</Col>
            <Col sm={12} md={6} lg={6} style={{ background: 'transparent' }}>
              <div>
                <Image
                  style={{ border: '0px' }}
                  src={landingImage}
                  alt={'Sign language class'}
                  fluid
                  thumbnail
                />
              </div>
            </Col>
          </Row>
        </section>
        <section style={{ height: '100vh' }}></section>
      </main>
    </div>
  );
};

export default HomeScreen;
