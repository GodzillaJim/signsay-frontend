import axios from 'axios';
import {
  GET_SENTENCES_FAIL,
  GET_SENTENCES_REQUEST,
  GET_SENTENCES_SUCCESS,
  REMOVE_ONE_SENTENCE,
} from '../constants/constants';

export const getSentences = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SENTENCES_REQUEST });
    const { data } = await axios.get('/sentences');
    console.log(data);
    dispatch({ type: GET_SENTENCES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SENTENCES_FAIL, payload: [] });
  }
};

export const removeSentenceAction =
  (sentences, sentence, sentenceGroup) => async (dispatch) => {
    console.log(sentences, sentence);
    let index = sentences[sentenceGroup].indexOf(sentence);
    let newArray = sentences;
    newArray[sentenceGroup].splice(index, 1);
    dispatch({ type: REMOVE_ONE_SENTENCE, payload: newArray });
  };
