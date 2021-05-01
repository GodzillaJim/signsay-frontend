import {
  SEND_VIDEO_FAIL,
  SEND_VIDEO_REQUEST,
  SEND_VIDEO_SUCCESS,
} from '../constants/constants';

export const sendVideoReducer = (
  state = { loading: false, video: [] },
  action
) => {
  switch (action.type) {
    case SEND_VIDEO_REQUEST:
      return { success: false, loading: true, video: action.payload };
    case SEND_VIDEO_SUCCESS:
      return { success: true, loading: false, video: {} };
    case SEND_VIDEO_FAIL:
      return { success: false, loading: false, error: action.payload };
    default:
      return state;
  }
};
