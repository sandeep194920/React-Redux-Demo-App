import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import logger from 'redux-logger'

// adding this logger to the middleware logs onto the browser's console
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;