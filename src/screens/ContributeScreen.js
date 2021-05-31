import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getSentences, removeSentenceAction } from '../actions/sentenceActions';
import { sendVideoAction } from '../actions/videoActions';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import VideoRecorder from 'react-video-recorder';

const ContributeScreen = () => {
  const dispatch = useDispatch();
  const [activeSentence, setActiveSentence] = useState('');
  const [completeSentences, setCompleteSentences] = useState([]);
  const [sentences, setSentences] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [videoBlob, setVideoBlob] = useState(false);
  const { loading, error, sentences: importedSentences } = useSelector(
    (state) => state.loadSentence
  );
  const { loading: sendingVideo, success } = useSelector(
    (state) => state.sendVideo
  );
  const [sentenceGroup, setSentenceGroup] = useState(0);
  const selectSentence = (e) => {
    setActiveSentence(e.target.value);
    setCompleteSentences([...completeSentences, e.target.value]);
  };

  const handlePreviousGroup = () => {
    if (sentenceGroup - 1 >= 0) {
      setSentenceGroup(sentenceGroup - 1);
    }
  };
  const handleNextGroup = () => {
    if (sentenceGroup + 1 < importedSentences.length) {
      setSentenceGroup(sentenceGroup + 1);
    }
  };
  const handleRecord = (videoBlob) => {
    console.log(videoBlob);
    setVideoBlob(videoBlob);
  };
  const handleSubmitVideo = (e) => {
    e.preventDefault();
    dispatch(
      removeSentenceAction(importedSentences, activeSentence, sentenceGroup)
    );
    dispatch(sendVideoAction(videoBlob, activeSentence));
    setActiveSentence('');
  };
  useEffect(() => {
    dispatch(getSentences());
  }, [importedSentences]);

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
                      Sign Language. You will be requested to allow the website
                      to access your camera. Please allow to proceed. You can
                      cancel and restart recording. Once you are satisfied,
                      click submit.
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
              <Col sm={12} xs={12} lg={6} md={6}>
                <h4>Sentences</h4>
                <Card>
                  <Card.Body>
                    <Form style={{ fontSize: '14px' }}>
                      {importedSentences && importedSentences.length < 1 ? (
                        <span className='text-center text-warning'>
                          There are no sentences at the moment. Check again
                          later.
                        </span>
                      ) : (
                        importedSentences[sentenceGroup].map((sent, index) => {
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
                        })
                      )}
                    </Form>
                  </Card.Body>
                  <Card.Footer className='text-center'>
                    <Button
                      disabled={sentenceGroup - 1 < 0}
                      variant='link'
                      className='mr-auto'
                      onClick={handlePreviousGroup}
                    >
                      Previous
                    </Button>
                    <Button
                      disabled={sentenceGroup + 1 >= importedSentences.length}
                      variant='link'
                      className='ml-auto'
                      onClick={handleNextGroup}
                    >
                      Next
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={12} xs={12} lg={6} md={6}>
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
                    <VideoRecorder
                      onRecordingComplete={handleRecord}
                      showReplayControls
                      timeLimit={30000}
                    />
                  </Card.Body>
                  <Card.Footer className='text-right'>
                    <Button
                      disabled={activeSentence === '' || !videoBlob}
                      onClick={handleSubmitVideo}
                    >
                      {sendingVideo ? <Spinner animation='border' /> : 'Submit'}
                    </Button>
                  </Card.Footer>
                </Card>
                {success && (
                  <span className='text-success' id='success'>
                    Submission Successful
                  </span>
                )}
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
