import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import { MDBMask, MDBView, MDBContainer } from 'mdbreact';
import { ImageOverlay } from 'react-image-overlay-effect';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import ComingSoonw200 from '../images/waiting/waiting_odvwag_c_scale,w_200.jpg';
import ComingSoonw617 from '../images/waiting/waiting_odvwag_c_scale,w_1022.jpg';
import ComingSoonw981 from '../images/waiting/waiting_odvwag_c_scale,w_1400.jpg';
import Waiting from '../images/waiting.jpg';

const SignScreen = () => {
  const [image, setImage] = useState(ComingSoonw981);
  useEffect(() => {
    switch (window.innerWidth) {
      case window.innerWidth <= 200:
        return setImage(ComingSoonw200);
      case window.innerWidth <= 1022:
        return setImage(ComingSoonw617);
      case window.innerWidth <= 1400:
        return setImage(ComingSoonw981);
      default:
        return setImage(ComingSoonw617);
    }
  }, [window.innerWidth]);
  return (
    <div className='bg-light'>
      <Container>
        <AppBar />
        <section style={{ marginTop: '75px' }}>
          <Row>
            <Col>
              <Image
                src={image}
                thumbnail
                alt='person waiting'
                style={{ width: '0.8vw' }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={10} lg={10}>
              <Card>
                <Card.Body>
                  <h1 className='text-info'>Coming Soon...</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <Footer
          author='Vecteezy'
          attribution={'https://www.vecteezy.com/free-vector/holiday'}
        />
      </Container>
    </div>
  );
};
export default SignScreen;
