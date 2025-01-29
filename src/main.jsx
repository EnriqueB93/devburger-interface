import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { Login } from './components/Login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles />
		<Login />
		<ToastContainer position="top-right" autoClose={3000} theme="dark" />
	</StrictMode>,
);
