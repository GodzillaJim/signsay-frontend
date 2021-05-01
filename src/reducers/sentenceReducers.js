import {
  GET_SENTENCES_FAIL,
  GET_SENTENCES_REQUEST,
  GET_SENTENCES_SUCCESS,
  REMOVE_ONE_SENTENCE,
} from '../constants/constants';

export const loadSentenceReducer = (
  state = { loading: false, sentences: [] },
  action
) => {
  switch (action.type) {
    case GET_SENTENCES_REQUEST:
      return { loading: true, sentences: [] };
    case GET_SENTENCES_SUCCESS:
      return { loading: false, sentences: action.payload };
    case GET_SENTENCES_FAIL:
      return { loading: false, error: action.payload };
    case REMOVE_ONE_SENTENCE:
      return { sentences: action.payload, ...state };
    default:
      return state;
  }
};
