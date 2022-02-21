import { myStore } from '../store/myStore'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = myStore;
  return (<Provider store={myStore}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
