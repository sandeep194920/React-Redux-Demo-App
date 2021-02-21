import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// adding this logger to the middleware logs onto the browser's console
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store; 