import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';

import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
		<ToastContainer position="top-right" autoClose={3000} theme="dark" />
	</StrictMode>,
);

