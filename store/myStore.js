import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import { defaultReducer } from '../reducer/defaultReducer'
export const appReducer = combineReducers({
    defaultReducer,
})

export const myStore = createStore(appReducer, applyMiddleware(thunkMiddleware, logger))

