import { myStore, persistor } from '../store/myStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

function MyApp({ Component, pageProps }) {
	const store = myStore;
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const handleStart = (url) => (url !== router.asPath) && setLoading(true);
		const handleComplete = (url) => (url === router.asPath) && setLoading(false);

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
			console.log("loading", loading)
		}

	})
	return (
		<Provider store={myStore}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
				<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={false}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
