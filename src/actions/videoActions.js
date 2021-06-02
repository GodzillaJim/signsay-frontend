import axios from 'axios';
import {
  SEND_VIDEO_FAIL,
  SEND_VIDEO_REQUEST,
  SEND_VIDEO_SUCCESS,
} from '../constants/constants';

export const sendVideoAction = (blob, sentence) => async (dispatch) => {
  try {
    blob.name = sentence.split(' ').join('_');
    console.log(blob);
    dispatch({ type: SEND_VIDEO_REQUEST, payload: blob });
    let videoFile = new File([blob], blob.name + '.webm', {
      type: 'video/webm',
    });

    let formData = new FormData();
    formData.append('video', videoFile);

    let { data } = await axios.post('/video', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(data);
    dispatch({ type: SEND_VIDEO_SUCCESS });
  } catch (error) {
    dispatch({ type: SEND_VIDEO_FAIL, payload: error });
  }
};
