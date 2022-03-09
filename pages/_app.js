import { myStore, persistor } from '../store/myStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = myStore;
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
