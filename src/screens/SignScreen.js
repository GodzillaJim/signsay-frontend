import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Image } from 'react-bootstrap';
import { MDBMask, MDBView, MDBContainer } from 'mdbreact';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import ComingSoonw200 from '../images/coming-soon/2770497_iid4jg_c_scale,w_200.jpg';
import ComingSoonw617 from '../images/coming-soon/2770497_iid4jg_c_scale,w_617.jpg';
import ComingSoonw981 from '../images/coming-soon/2770497_iid4jg_c_scale,w_981.jpg';
import ComingSoonw1328 from '../images/coming-soon/2770497_iid4jg_c_scale,w_1328.jpg';
import ComingSoonw1400 from '../images/coming-soon/2770497_iid4jg_c_scale,w_1400.jpg';

const SignScreen = () => {
  const [image, setImage] = useState(ComingSoonw981);
  useEffect(() => {
    switch (window.innerWidth) {
      case window.innerWidth <= 200:
        return setImage(ComingSoonw200);
      case window.innerWidth <= 617:
        return setImage(ComingSoonw617);
      case window.innerWidth <= 981:
        return setImage(ComingSoonw981);
      case window.innerWidth <= 1328:
        return setImage(ComingSoonw1328);
      case window.innerWidth > 1328:
        return setImage(ComingSoonw1400);
      default:
        return setImage(ComingSoonw617);
    }
  }, [window.innerWidth]);
  return (
    <div className='bg-light my-3'>
      <AppBar />
      <MDBContainer className='mt-5'>
        <MDBView>
          <img src={image} alt='People-working' />
          <MDBMask className='flex-center' pattern={5}>
            <p>Coming Soon</p>
          </MDBMask>
        </MDBView>
      </MDBContainer>
      <Footer />
    </div>
  );
};
export default SignScreen;
