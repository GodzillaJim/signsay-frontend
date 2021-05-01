import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadSentenceReducer } from './reducers/sentenceReducers';
import { sendVideoReducer } from './reducers/videoReducers'

const reducers = combineReducers({
  loadSentence: loadSentenceReducer,
  sendVideo: sendVideoReducer
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
