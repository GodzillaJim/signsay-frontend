import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadSentenceReducer } from './reducers/sentenceReducers';

const reducers = combineReducers({
  loadSentence: loadSentenceReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
