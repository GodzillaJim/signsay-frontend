import axios from 'axios';
import { sentences } from '../data/data';
import {
  SEND_VIDEO_FAIL,
  SEND_VIDEO_REQUEST,
  SEND_VIDEO_SUCCESS,
} from '../constants/constants';

export const sendVideoAction = (blob, sentence) => async (dispatch) => {
  try {
    blob.name = sentence.split(' ').join('_');
   console.log(blob)
    dispatch({ type: SEND_VIDEO_REQUEST, payload: blob });
    // await axios.post('/video', blog);
    dispatch({ type: SEND_VIDEO_SUCCESS });
  } catch (error) {
    dispatch({ type: SEND_VIDEO_FAIL, payload: error });
  }
};
