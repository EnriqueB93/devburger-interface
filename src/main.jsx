import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { Router } from './routes/index.jsx';

import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripe/stripeConfig.js';
import AppProvider from './hooks/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<GlobalStyles />
				<Elements stripe={stripePromise}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Elements>
				<ToastContainer position="top-right" autoClose={2000} theme="dark" />
			</AppProvider>
		</ThemeProvider>
	</StrictMode>,
);
