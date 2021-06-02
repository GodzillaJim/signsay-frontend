import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
} from 'react-bootstrap';
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
  }, []);
  return (
    <div className='bg-light'>
      <Container>
        <header className='row'>
          <AppBar />
        </header>
        <main className='row' style={{ marginTop: '50px', zIndex: '2' }}>
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
                <p style={{ fontFamily: 'Times New Roman' }} className='h5'>
                  SignSay translates British Sign Language into English. About
                  5% of the world's population have impaired hearing and use
                  sign language to communicate. Yet, the world has less than
                  100million SL interpreters to match. As a result, signers and
                  non-signers have trouble engaging in hospitals, interviews,
                  coffee shops and other professional and social settings. We
                  are building an application to bridge this gap. Users will be
                  able to capture signs using their handheld devices and receive
                  their textual translation. The application will be ready in a
                  few weeks and will be offered free of charge. If you are as
                  excited to make the world a better place as we are, scroll
                  below on how you can contribute. &nbsp;
                </p>
                <span text-right>
                  <i className=' text-info h4 fas fa-quote-right'></i>
                </span>
              </Card.Body>
            </Card>
            <Row>
              <Col sm={6}>
                <Card style={{ fontFamily: 'Times New Roman' }}>
                  <Card.Header className='h5 text-primary'>Signers</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <ListGroup as='ul' className='bg-light text-dark'>
                        <ListGroup.Item as='li' key='1'>
                          If you can Sign in any language, we need your help
                          creating our app. Hit the Contribute button and start
                          recording videos. We have already prepared the
                          sentences.
                        </ListGroup.Item>
                        <ListGroup.Item as='li' key='2'>
                          If you already have you videos of signs and gestures
                          recorded, please shoot me an email
                          <Button
                            variant='link'
                            href='mailto:jimnam99@gmail.com'
                          >
                            here
                          </Button>
                          and then we can agree on the best way of exchanging
                          the videos.
                        </ListGroup.Item>
                        <ListGroup.Item as='li' key='3'>
                          Are you an expert in sign language? We need help with
                          the semantics and syntax of Sign Language.
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card style={{ fontFamily: 'Times New Roman' }}>
                  <Card.Header className='h5 text-primary'>
                    Developers
                  </Card.Header>
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item key='1'>
                        We are using Tensorflow, PyTorch, and Keras to run our
                        models. If you have working knowledge in any of them, we
                        could use your help. Shoot me an
                        <Button variant='link' href='mailto:jimnam99@gmail.com'>
                          email
                        </Button>
                        . We use <i class='fab fa-python m-1'></i>
                      </ListGroup.Item>
                      <ListGroup.Item key='2'>
                        We use ReactJS a lot to deliver a convenient interface.
                        We could use your help if you use it too.
                      </ListGroup.Item>
                      <ListGroup.Item key='3'>
                        <br />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default HomeScreen;
