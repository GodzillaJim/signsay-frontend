import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import WordReveal from 'react-text-reveal';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import TypeWriterEffect from 'react-typewriter-effect';
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
  }, [window.innerWidth]);
  return (
    <div className='bg-light'>
      <Container>
        <header className='row'>
          <AppBar />
        </header>
        <main
          className='row'
          style={{ zIndex: '2' }}
          style={{ marginTop: '50px' }}
        >
          <section id='landing' style={{ zIndex: '1' }} className='section'>
            <Row
              style={{
                top: '20px',
                height: window.innerWidth < 720 ? 'auto' : 'auto',
              }}
            >
              <Col
                className='p-3 text-center'
                style={{ backgroundColor: 'white' }}
              >
                <Row className='mt-3'>
                  <Col className='mx-auto'>
                    <h1
                      className='text-primary mt-3 text-bold'
                      style={{ fontSize: '3.0rem' }}
                    >
                      Welcome to SignSay!
                    </h1>
                  </Col>
                </Row>
                <Row className='m-3 p-3 text-center'>
                  <Col style={{ height: '8%' }} className='text-center m-3'>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: 'Times New Roman',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                      }}
                      startDelay={100}
                      cursorColor='black'
                      text='We are building a state of the art Sign Language Recognition App to help Signers speak!!'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p
                      style={{
                        fontSize: '1.2rem',
                        fontFamily: 'Times New Roman',
                      }}
                    >
                      We are still putting things together. If you sign in any
                      language, we would love your contribution. Follow the
                      Contribute button below to find out how.
                    </p>
                    <Row>
                      <Col>
                        <Button
                          href='/contribute'
                          className='p-2'
                          style={{ fontFamily: 'Times New Roman' }}
                        >
                          Contribute
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          href='https://github.com/godzillajim/signsay'
                          style={{ fontFamily: 'Times New Roman' }}
                        >
                          Github &nbsp;
                          <i className='fab fa-github'></i>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={6} lg={6} style={{ background: 'transparent' }}>
                <div className='my-auto'>
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

          <section id='about' className='section'>
            <h2 className='text-primary m-3'>About</h2>
            <Card>
              <Card.Body>
                <span>
                  <i className='text-info h4 fas fa-quote-left'></i>
                </span>
                &nbsp;{' '}
                <p style={{ fontFamily: 'Times New Roman' }} className='h4'>
                  SignSay translates British Sign Language into English. About
                  5% of the world's population have impaired hearing and use
                  sign language to communicate. Yet, the world has less than
                  100million SL interpreters to match. As a result, signers and
                  non-signers have trouble engaging in hospitals, interviews,
                  coffee shops and other professional and social settings. We
                  are building an application to bridge this gap. Users will be
                  able to capture signs using their handheld devices and receive
                  their textual translation. If you are a signer, you can help
                  make the app better by submitting videos and images on signs
                  to train our model. Follow this <a href='/contribute'>link</a>{' '}
                  to contribute. &nbsp;
                </p>
                <span text-right>
                  <i className=' text-info h4 fas fa-quote-right'></i>
                </span>
              </Card.Body>
            </Card>
          </section>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default HomeScreen;
