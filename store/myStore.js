import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import logger from 'redux-logger';
import { defaultReducer } from '../reducer/defaultReducer'
import { authReducer, formRegisterReducer, formLoginReducer } from '../reducer/authReducer'
import { userReducer } from '../reducer/userReducer'
import { customerReducer, dataShipper, dataReceiver } from '../reducer/customerReducer'
import { zoneRecipient, zoneShipper } from '../reducer/regionRecipientReducer'
import { detailBagasiReducer } from "../reducer/detailBagasiRducer"
import { courierReducer } from "../reducer/courierReducer"
import { smartboxReducer } from "../reducer/smartboxReducer"
import { paymentMethodReducer } from "../reducer/paymentMethodReducer"
import { deliveryReducer } from "../reducer/deliveryReducer"
import paketReducer from "../reducer/paketReducer"
import paymentSummaryReducer from "../reducer/paymentSummaryReducer"
import virtualAccountReducer from "../reducer/virtualAccountReducer"
import payWithCreditCardReducer from "../reducer/creditCardReducer"
import payWithRetailOutletReducer from "../reducer/payWithRetailOutlet"
import bankFeeReducer from '../reducer/bankFeeReducer';
import captchaReducer from '../reducer/captchaReducer'
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
export const appReducer = combineReducers({
    defaultReducer,
    authReducer,
    userReducer,
    customerReducer,
    zoneRecipient,
    zoneShipper,
    detailBagasiReducer,
    courierReducer,
    smartboxReducer,
    paketReducer,
    paymentMethodReducer,
    deliveryReducer,
    paymentSummaryReducer,
    virtualAccountReducer,
    bankFeeReducer,
    formRegisterReducer,
    formLoginReducer,
    dataShipper,
    dataReceiver,
    payWithCreditCardReducer,
    payWithRetailOutletReducer,
    captchaReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'authReducer',
        'userReducer',
        'customerReducer',
        'zoneRecipient',
        'zoneShipper',
        'detailBagasiReducer',
        'courierReducer',
        'deliveryReducer',
        'paymentSummaryReducer',
        'virtualAccountReducer',
        'bankFeeReducer',
        'payWithCreditCardReducer',
        'paymentMethodReducer',
        'payWithRetailOutletReducer'
    ]

}
const persistedReducer = persistReducer(persistConfig, appReducer)
export const myStore = compose(applyMiddleware(thunkMiddleware, ...middlewares))(createStore)(persistedReducer);
export const persistor = persistStore(myStore);

// export const myStore = createStore(appReducer, applyMiddleware(thunkMiddleware, logger))

