import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { sentences as importedSentences } from '../data/data';
import VideoRecorder from 'react-video-recorder';
const ContributeScreen = () => {
  const [activeSentence, setActiveSentence] = useState('');
  const [completeSentences, setCompleteSentences] = useState([]);
  const [sentences, setSentences] = useState(importedSentences);
  const [showVideo, setShowVideo] = useState(false);
  const [videoBlob, setVideoBlob] = useState(false);
  const selectSentence = (e) => {
    setActiveSentence(e.target.value);
    setCompleteSentences([...completeSentences, e.target.value]);
  };
  const handleRecord = (videoBlob) => {
    setVideoBlob(videoBlob);
  };
  const submitVideo = () => {
    // submiting the data for the label active sentence
    console.log(videoBlob);
  };

  return (
    <div id='contribute' style={{ fontFamily: 'Times New Roman' }}>
      <Container>
        <header>
          <AppBar />
        </header>
        <main style={{ marginTop: '75px' }}>
          <section id='instructions' className='my-2'>
            <h2
              className='m-3 text-primary'
              style={{ fontFamily: 'Times New Roman' }}
            >
              Contributing to SignSay...
            </h2>
            <Row>
              <Card className='my-3'>
                <Card.Body
                  className='h5'
                  style={{ fontFamily: 'Times New Roman', fontWeight: '100' }}
                >
                  Thank you for contributing to this project. Videos collected
                  on this platform will be used exclusively for the SignSay
                  project. If you have additional requirements about your
                  contribution, email us at catherineburnham68@gmail.com. <br />
                  To begin, follow the steps below.
                  <ol>
                    <li>
                      Find a good space and a camera. Make sure you have enough
                      space for free hand movement.
                    </li>
                    <li>
                      Select a sentence from the list below by clicking the
                      adjacent circle &nbsp; &#9675;
                    </li>
                    <li>
                      Read and understand the sentence. We realize some
                      sentences could be problematic. You can skip, check the
                      next one.
                    </li>
                    <li>
                      Set up your camera. Click the button on the right below to
                      start recording your version of the selected sentence in
                      Sign Language. You can cancel and restart recording. Once
                      you are satisfied, click submit.
                    </li>
                    <li>
                      You can record the signs offline and use the upload button
                      to upload your video. Click submit when you're
                      comfortable.
                    </li>
                    <li>
                      Once you are comfortable with the video recorded, click
                      submit. Select another sentence and repeat.
                    </li>
                  </ol>
                </Card.Body>
              </Card>
            </Row>
          </section>
          <section id='content'>
            <Row>
              <Col>
                <h4>Sentences</h4>
                <Card>
                  <Card.Body>
                    <Form style={{ fontSize: '14px' }}>
                      {sentences[0].map((sent, index) => {
                        return (
                          <Form.Group key={index}>
                            <Form.Check
                              name='sentence'
                              value={sent}
                              type='radio'
                              label={sent}
                              onClick={selectSentence}
                            />
                          </Form.Group>
                        );
                      })}
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <h4>Video</h4>
                <Card>
                  <Card.Header>
                    <span className='text-left'>
                      {activeSentence === '' ? (
                        <span className='text-danger text-bolder'>
                          Please select a sentence first!
                        </span>
                      ) : (
                        activeSentence
                      )}
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <VideoRecorder onRecordingComplete={handleRecord} />
                  </Card.Body>
                  <Card.Footer className='text-right'>
                    <Button
                      disabled={activeSentence === '' || !videoBlob}
                      onClick={submitVideo}
                    >
                      Submit
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </section>
          <section>
            <div id='uploadFile'></div>
          </section>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default ContributeScreen;
