import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import logger from 'redux-logger';
import { defaultReducer } from '../reducer/defaultReducer'
import { authReducer } from '../reducer/authReducer'
import { userReducer } from '../reducer/userReducer'
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
export const appReducer = combineReducers({
    defaultReducer,
    authReducer,
    userReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'authReducer',
        'userReducer'
    ]

}
const persistedReducer = persistReducer(persistConfig, appReducer)
export const myStore = compose(applyMiddleware(thunkMiddleware, ...middlewares))(createStore)(persistedReducer);
export const persistor = persistStore(myStore);

// export const myStore = createStore(appReducer, applyMiddleware(thunkMiddleware, logger))

