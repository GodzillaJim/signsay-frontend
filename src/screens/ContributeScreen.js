import React, { useState, useEffect } from 'react';
import {
  Container,
  Modal,
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
import countries from '../data/countries.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import AppBar from '../components/AppBar';
// import Footer from '../components/Footer';
import VideoRecorder from 'react-video-recorder';

const ContributeScreen = () => {
  // const [languages, setLanguages] = useState([
  //   'American SL',
  //   'British SL',
  //   'New Zealand',
  //   'Chinese SL',
  //   'German SL',
  //   'K',
  // ]);
  const [showInstructions, setShowInstructions] = useState(true);
  const dispatch = useDispatch();
  const [activeSentence, setActiveSentence] = useState('');
  const [completeSentences, setCompleteSentences] = useState([]);
  const [videoBlob, setVideoBlob] = useState(false);
  const { loading, sentences: importedSentences } = useSelector(
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
    if (importedSentences.length < 1 && !loading) {
      dispatch(getSentences());
    }
  });
  return (
    <div>
      <Container>
        <section>
          <header className='row'>
            <AppBar />
          </header>
        </section>
        <section id='content' style={{ fontFamily: 'Times New Roman' }}>
          <Row style={{ marginTop: '100px' }}>
            <Col sm={12} xs={12} lg={6} md={6}>
              <Card>
                <Card.Text>
                  <Col>
                    <Button
                      onClick={(e) => setShowInstructions(!showInstructions)}
                      variant='link'
                      style={{ fontFamily: 'Times New Roman' }}
                    >
                      Show instructions
                    </Button>
                  </Col>
                </Card.Text>
                <Card.Text className='h3'>Sentences</Card.Text>
                <Card.Body>
                  <Form style={{ fontSize: '14px' }}>
                    <Form.Group>
                      <Autocomplete
                        id='countries'
                        options={countries}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 250, borderColor: 'purple' }}
                        size='small'
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label='SL Country'
                            variant='outlined'
                          />
                        )}
                        disabled={
                          importedSentences && importedSentences.length < 1
                        }
                      />
                      <small>Select your sign language dialect.</small>
                    </Form.Group>
                    {importedSentences && importedSentences.length < 1 ? (
                      <span className='text-center text-warning'>
                        There are no sentences at the moment. Check again later.
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
                    timeLimit={60000}
                  />
                  <Row>
                    <Button
                      className='ml-auto m-3'
                      disabled={activeSentence === '' || !videoBlob}
                      onClick={handleSubmitVideo}
                    >
                      {sendingVideo ? <Spinner animation='border' /> : 'Submit'}
                    </Button>
                  </Row>
                </Card.Body>
              </Card>
              {success && (
                <span className='text-success' id='success'>
                  Submission Successful
                </span>
              )}
            </Col>
          </Row>
        </section>
        <div></div>
        <Modal
          className='col-12'
          show={showInstructions}
          onHide={(e) => setShowInstructions(false)}
          onEscapeKeyDown={(e) => setShowInstructions(false)}
        >
          <Modal.Header
            className='h4 text-primary bg-primary text-light'
            closeButton
          >
            Please read these instructions
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Card className='my-3'>
                <Card.Body
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
            <Row>
              <Button
                variant='primary'
                onClick={(e) => setShowInstructions(false)}
                className='ml-auto m-2'
              >
                Continue
              </Button>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default ContributeScreen;
