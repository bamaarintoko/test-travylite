import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
// import logger from 'redux-logger';
import { defaultReducer } from '../reducer/defaultReducer'

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
  
    middlewares.push(logger);
  }
export const appReducer = combineReducers({
    defaultReducer,
})

export const myStore = compose(applyMiddleware(...middlewares))(createStore)(appReducer);

// export const myStore = createStore(appReducer, applyMiddleware(thunkMiddleware, logger))

