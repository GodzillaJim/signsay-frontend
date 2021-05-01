import axios from 'axios';
import { sentences } from '../data/data';
import {
  GET_SENTENCES_FAIL,
  GET_SENTENCES_REQUEST,
  GET_SENTENCES_SUCCESS,
  REMOVE_ONE_SENTENCE,
} from '../constants/constants';

export const getSentences = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SENTENCES_REQUEST });
    // const { data } = await axios.get('/sentences');
    dispatch({ type: GET_SENTENCES_SUCCESS, payload: sentences });
  } catch (error) {
    dispatch({ type: GET_SENTENCES_FAIL, payload: error });
  }
};

export const removeSentenceAction = (
  sentences,
  sentence,
  sentenceGroup
) => async (dispatch) => {
  console.log(sentences, sentence);
  let index = sentences[sentenceGroup].indexOf(sentence);
  let newArray = sentences;
  newArray[sentenceGroup].splice(index, 1);
  dispatch({ type: REMOVE_ONE_SENTENCE, payload: newArray });
};
