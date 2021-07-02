import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Navbar,
  ListGroup,
  Image,
  Modal,
} from 'react-bootstrap';
import axios from 'axios';
import { products } from '../data/test';

const FacebookPayScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    let loggedInMemory = localStorage.getItem('loggedInMemory');
    if (loggedInMemory) {
      setLoggedIn(true);
    }
  });

  const handleLogin = () => {
    let { data } = async () =>
      await axios.post('/pay', { username, password })();
    if (data) {
      setLoggedIn(true);
      localStorage.setItem('loggedInMemory', true);
    } else {
      setMessage('Username or password is wrong');
    }
  };
  const handleFacebookPay = () => {};
  return (
    <>
      {loggedIn ? (
        <Row>
          <Col className='col-xl-4 mx-auto'>
            <Card
              style={{
                top: '50%',
                fontFamily: 'Times New Roman',
                textWeight: 'bolder',
              }}
            >
              <Card.Header className='text-light bg-primary'>
                Log In
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleLogin}>
                  {message && <small className='text-danger'>{message}</small>}
                  <Form.Group controlId='pay-form'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      value={username}
                      type='text'
                      placeholder='Enter username'
                    />
                  </Form.Group>
                  <Form.Group controlId='pay-form-password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      value={password}
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Shop />
      )}
    </>
  );
};
const Shop = () => {
  const [showPayModal, setShowPayModal] = useState(false);
  const handlePayment = () => {};
  const generateNumbers = () => {
    let rating = products.rating[0].rating;
    let arr = [];
    for (let a = 1; a <= rating; a++) {
      arr.push(a);
    }
    return arr;
  };
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <b>Shopper</b>
        </Navbar.Brand>
      </Navbar>
      <div className='bg-light'>
        <ListGroup variant='flush' className='bg-light'>
          <ListGroup.Item key={products.id} className='bg-light text-dark'>
            <Card className='col-3'>
              <Card.Img
                className='mx-auto'
                variant='top'
                src={products.image}
                style={{ width: '9rem' }}
              />
              <Card.Body className='text-center p-1 m-1'>
                <Card.Title className='text-center m-1 p-1'>
                  {products.name}
                </Card.Title>
                <Card.Subtitle className='text-center p-1 m-1'>
                  {products.author}
                </Card.Subtitle>
                <Card.Text className='text-center text-bold p-1 m-1'>
                  ${products.price}
                </Card.Text>
                <Card.Text className='p-1 m-1 text-center'>
                  {generateNumbers().map((r) => (
                    <i key={r} className='fas text-warning fa-star'></i>
                  ))}
                </Card.Text>
                <Button onClick={setShowPayModal} variant='dark'>
                  Get it Now
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
        <Modal show={showPayModal} onHide={(e) => setShowPayModal(false)}>
          <Modal.Header>Select your payment method</Modal.Header>
          <Modal.Body>
            <Button href='#' variant='link'>
              <i className='fab fa-facebook-f'></i>
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default FacebookPayScreen;
