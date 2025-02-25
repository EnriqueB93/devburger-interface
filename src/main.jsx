import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';

import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripe/stripeConfig.js';
import AppProvider from './hooks/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<GlobalStyles />
			<Elements stripe={stripePromise}>
				<RouterProvider router={router} />
			</Elements>
			<ToastContainer position="top-right" autoClose={2000} theme="dark" />
		</AppProvider>
	</StrictMode>,
);
